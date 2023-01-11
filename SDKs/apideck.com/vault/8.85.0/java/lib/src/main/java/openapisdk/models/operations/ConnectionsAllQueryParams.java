package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConnectionsAllQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api")
    public String api;
    public ConnectionsAllQueryParams withApi(String api) {
        this.api = api;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=configured")
    public Boolean configured;
    public ConnectionsAllQueryParams withConfigured(Boolean configured) {
        this.configured = configured;
        return this;
    }
}