package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteUsageLimitQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteUsageLimitActionEnum action;
    public GetDeleteUsageLimitQueryParams withAction(GetDeleteUsageLimitActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UsageLimitId")
    public String usageLimitId;
    public GetDeleteUsageLimitQueryParams withUsageLimitId(String usageLimitId) {
        this.usageLimitId = usageLimitId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteUsageLimitVersionEnum version;
    public GetDeleteUsageLimitQueryParams withVersion(GetDeleteUsageLimitVersionEnum version) {
        this.version = version;
        return this;
    }
}