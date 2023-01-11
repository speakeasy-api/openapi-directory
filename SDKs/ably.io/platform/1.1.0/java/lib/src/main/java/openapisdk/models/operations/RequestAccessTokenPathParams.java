package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RequestAccessTokenPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=keyName")
    public String keyName;
    public RequestAccessTokenPathParams withKeyName(String keyName) {
        this.keyName = keyName;
        return this;
    }
}