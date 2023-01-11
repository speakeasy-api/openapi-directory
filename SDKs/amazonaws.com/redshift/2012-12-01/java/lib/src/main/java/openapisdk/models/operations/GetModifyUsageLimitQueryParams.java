package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModifyUsageLimitQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetModifyUsageLimitActionEnum action;
    public GetModifyUsageLimitQueryParams withAction(GetModifyUsageLimitActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Amount")
    public Long amount;
    public GetModifyUsageLimitQueryParams withAmount(Long amount) {
        this.amount = amount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=BreachAction")
    public GetModifyUsageLimitBreachActionEnum breachAction;
    public GetModifyUsageLimitQueryParams withBreachAction(GetModifyUsageLimitBreachActionEnum breachAction) {
        this.breachAction = breachAction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UsageLimitId")
    public String usageLimitId;
    public GetModifyUsageLimitQueryParams withUsageLimitId(String usageLimitId) {
        this.usageLimitId = usageLimitId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetModifyUsageLimitVersionEnum version;
    public GetModifyUsageLimitQueryParams withVersion(GetModifyUsageLimitVersionEnum version) {
        this.version = version;
        return this;
    }
}