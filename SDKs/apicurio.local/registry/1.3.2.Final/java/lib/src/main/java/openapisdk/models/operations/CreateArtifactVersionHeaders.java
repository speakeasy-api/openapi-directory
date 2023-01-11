package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateArtifactVersionHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Registry-ArtifactType")
    public CreateArtifactVersionXRegistryArtifactTypeEnum xRegistryArtifactType;
    public CreateArtifactVersionHeaders withXRegistryArtifactType(CreateArtifactVersionXRegistryArtifactTypeEnum xRegistryArtifactType) {
        this.xRegistryArtifactType = xRegistryArtifactType;
        return this;
    }
}