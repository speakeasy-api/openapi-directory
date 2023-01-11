package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestUpdateArtifactHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Registry-ArtifactType")
    public TestUpdateArtifactXRegistryArtifactTypeEnum xRegistryArtifactType;
    public TestUpdateArtifactHeaders withXRegistryArtifactType(TestUpdateArtifactXRegistryArtifactTypeEnum xRegistryArtifactType) {
        this.xRegistryArtifactType = xRegistryArtifactType;
        return this;
    }
}