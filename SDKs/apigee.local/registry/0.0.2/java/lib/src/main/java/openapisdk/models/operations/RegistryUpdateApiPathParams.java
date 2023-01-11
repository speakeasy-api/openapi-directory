package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistryUpdateApiPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=api")
    public String api;
    public RegistryUpdateApiPathParams withApi(String api) {
        this.api = api;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public RegistryUpdateApiPathParams withProject(String project) {
        this.project = project;
        return this;
    }
}