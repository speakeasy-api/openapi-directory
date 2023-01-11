package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListBranchesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public String appId;
    public ListBranchesPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
}