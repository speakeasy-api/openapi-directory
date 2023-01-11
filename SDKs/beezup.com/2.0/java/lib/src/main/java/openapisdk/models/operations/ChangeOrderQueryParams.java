package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChangeOrderQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=testMode")
    public Boolean testMode;
    public ChangeOrderQueryParams withTestMode(Boolean testMode) {
        this.testMode = testMode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userName")
    public String userName;
    public ChangeOrderQueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}