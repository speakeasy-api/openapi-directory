package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VerifySkuApiV1VerifySkuGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locking_period")
    public Object lockingPeriod;
    public VerifySkuApiV1VerifySkuGetQueryParams withLockingPeriod(Object lockingPeriod) {
        this.lockingPeriod = lockingPeriod;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public VerifySkuApiV1VerifySkuGetQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
}