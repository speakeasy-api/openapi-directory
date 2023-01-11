package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistryGetProjectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public RegistryGetProjectPathParams withProject(String project) {
        this.project = project;
        return this;
    }
}