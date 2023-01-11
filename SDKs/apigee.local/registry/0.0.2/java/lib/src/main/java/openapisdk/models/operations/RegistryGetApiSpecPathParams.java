package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistryGetApiSpecPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=api")
    public String api;
    public RegistryGetApiSpecPathParams withApi(String api) {
        this.api = api;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public RegistryGetApiSpecPathParams withProject(String project) {
        this.project = project;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=spec")
    public String spec;
    public RegistryGetApiSpecPathParams withSpec(String spec) {
        this.spec = spec;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public String version;
    public RegistryGetApiSpecPathParams withVersion(String version) {
        this.version = version;
        return this;
    }
}