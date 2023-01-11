package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistryDeleteApiVersionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=api")
    public String api;
    public RegistryDeleteApiVersionPathParams withApi(String api) {
        this.api = api;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public RegistryDeleteApiVersionPathParams withProject(String project) {
        this.project = project;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public String version;
    public RegistryDeleteApiVersionPathParams withVersion(String version) {
        this.version = version;
        return this;
    }
}