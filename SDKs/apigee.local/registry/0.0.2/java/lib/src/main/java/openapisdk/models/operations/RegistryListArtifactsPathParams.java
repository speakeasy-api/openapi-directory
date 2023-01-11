package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistryListArtifactsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public RegistryListArtifactsPathParams withProject(String project) {
        this.project = project;
        return this;
    }
}