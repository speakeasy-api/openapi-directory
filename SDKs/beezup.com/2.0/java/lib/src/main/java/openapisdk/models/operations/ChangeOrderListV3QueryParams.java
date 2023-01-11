package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChangeOrderListV3QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=testMode")
    public Boolean testMode;
    public ChangeOrderListV3QueryParams withTestMode(Boolean testMode) {
        this.testMode = testMode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userName")
    public String userName;
    public ChangeOrderListV3QueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}