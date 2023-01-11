package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChangeOrderListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=testMode")
    public Boolean testMode;
    public ChangeOrderListQueryParams withTestMode(Boolean testMode) {
        this.testMode = testMode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userName")
    public String userName;
    public ChangeOrderListQueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}