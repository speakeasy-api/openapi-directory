package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateArtifactHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Registry-ArtifactType")
    public UpdateArtifactXRegistryArtifactTypeEnum xRegistryArtifactType;
    public UpdateArtifactHeaders withXRegistryArtifactType(UpdateArtifactXRegistryArtifactTypeEnum xRegistryArtifactType) {
        this.xRegistryArtifactType = xRegistryArtifactType;
        return this;
    }
}