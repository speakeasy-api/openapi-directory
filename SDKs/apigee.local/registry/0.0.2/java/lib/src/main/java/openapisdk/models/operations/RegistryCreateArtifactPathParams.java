package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistryCreateArtifactPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public RegistryCreateArtifactPathParams withProject(String project) {
        this.project = project;
        return this;
    }
}