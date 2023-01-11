package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistryDeleteProjectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public RegistryDeleteProjectPathParams withProject(String project) {
        this.project = project;
        return this;
    }
}