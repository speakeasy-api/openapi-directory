package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistryCreateArtifactQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=artifact_id")
    public String artifactId;
    public RegistryCreateArtifactQueryParams withArtifactId(String artifactId) {
        this.artifactId = artifactId;
        return this;
    }
}