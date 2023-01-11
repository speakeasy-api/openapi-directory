package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistryListApiSpecRevisionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=api")
    public String api;
    public RegistryListApiSpecRevisionsPathParams withApi(String api) {
        this.api = api;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public RegistryListApiSpecRevisionsPathParams withProject(String project) {
        this.project = project;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=spec")
    public String spec;
    public RegistryListApiSpecRevisionsPathParams withSpec(String spec) {
        this.spec = spec;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public String version;
    public RegistryListApiSpecRevisionsPathParams withVersion(String version) {
        this.version = version;
        return this;
    }
}