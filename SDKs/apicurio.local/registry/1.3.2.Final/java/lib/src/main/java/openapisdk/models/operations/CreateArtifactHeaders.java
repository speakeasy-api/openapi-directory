package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateArtifactHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Registry-ArtifactId")
    public String xRegistryArtifactId;
    public CreateArtifactHeaders withXRegistryArtifactId(String xRegistryArtifactId) {
        this.xRegistryArtifactId = xRegistryArtifactId;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Registry-ArtifactType")
    public CreateArtifactXRegistryArtifactTypeEnum xRegistryArtifactType;
    public CreateArtifactHeaders withXRegistryArtifactType(CreateArtifactXRegistryArtifactTypeEnum xRegistryArtifactType) {
        this.xRegistryArtifactType = xRegistryArtifactType;
        return this;
    }
}