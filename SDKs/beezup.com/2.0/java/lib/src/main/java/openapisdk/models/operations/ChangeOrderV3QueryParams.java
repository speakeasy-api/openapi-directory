package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChangeOrderV3QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=testMode")
    public Boolean testMode;
    public ChangeOrderV3QueryParams withTestMode(Boolean testMode) {
        this.testMode = testMode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userName")
    public String userName;
    public ChangeOrderV3QueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}