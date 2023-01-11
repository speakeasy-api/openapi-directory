package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VerifyBusinessApiV1VerifyPhoneGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locking_period")
    public Object lockingPeriod;
    public VerifyBusinessApiV1VerifyPhoneGetQueryParams withLockingPeriod(Object lockingPeriod) {
        this.lockingPeriod = lockingPeriod;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public VerifyBusinessApiV1VerifyPhoneGetQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
}