package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUpdateApplicationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetUpdateApplicationActionEnum action;
    public GetUpdateApplicationQueryParams withAction(GetUpdateApplicationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ApplicationName")
    public String applicationName;
    public GetUpdateApplicationQueryParams withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Description")
    public String description;
    public GetUpdateApplicationQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetUpdateApplicationVersionEnum version;
    public GetUpdateApplicationQueryParams withVersion(GetUpdateApplicationVersionEnum version) {
        this.version = version;
        return this;
    }
}