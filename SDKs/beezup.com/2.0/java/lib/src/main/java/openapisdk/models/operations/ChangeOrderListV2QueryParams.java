package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChangeOrderListV2QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=testMode")
    public Boolean testMode;
    public ChangeOrderListV2QueryParams withTestMode(Boolean testMode) {
        this.testMode = testMode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userName")
    public String userName;
    public ChangeOrderListV2QueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}