package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTokenPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public String appId;
    public CreateTokenPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
}