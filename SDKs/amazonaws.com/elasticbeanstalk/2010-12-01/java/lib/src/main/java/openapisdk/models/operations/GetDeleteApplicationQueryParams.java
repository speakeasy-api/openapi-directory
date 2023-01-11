package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteApplicationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteApplicationActionEnum action;
    public GetDeleteApplicationQueryParams withAction(GetDeleteApplicationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ApplicationName")
    public String applicationName;
    public GetDeleteApplicationQueryParams withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TerminateEnvByForce")
    public Boolean terminateEnvByForce;
    public GetDeleteApplicationQueryParams withTerminateEnvByForce(Boolean terminateEnvByForce) {
        this.terminateEnvByForce = terminateEnvByForce;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteApplicationVersionEnum version;
    public GetDeleteApplicationQueryParams withVersion(GetDeleteApplicationVersionEnum version) {
        this.version = version;
        return this;
    }
}