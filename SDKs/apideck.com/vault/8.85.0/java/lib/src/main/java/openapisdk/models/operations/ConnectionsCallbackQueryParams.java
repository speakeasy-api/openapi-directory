package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConnectionsCallbackQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=code")
    public String code;
    public ConnectionsCallbackQueryParams withCode(String code) {
        this.code = code;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public String state;
    public ConnectionsCallbackQueryParams withState(String state) {
        this.state = state;
        return this;
    }
}