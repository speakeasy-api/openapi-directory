package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistryListApiVersionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=api")
    public String api;
    public RegistryListApiVersionsPathParams withApi(String api) {
        this.api = api;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public RegistryListApiVersionsPathParams withProject(String project) {
        this.project = project;
        return this;
    }
}