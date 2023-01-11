package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistryGetApiPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=api")
    public String api;
    public RegistryGetApiPathParams withApi(String api) {
        this.api = api;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public RegistryGetApiPathParams withProject(String project) {
        this.project = project;
        return this;
    }
}