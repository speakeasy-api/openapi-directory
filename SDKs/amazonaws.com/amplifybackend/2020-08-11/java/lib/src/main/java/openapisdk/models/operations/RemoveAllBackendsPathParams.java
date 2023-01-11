package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveAllBackendsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public String appId;
    public RemoveAllBackendsPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
}