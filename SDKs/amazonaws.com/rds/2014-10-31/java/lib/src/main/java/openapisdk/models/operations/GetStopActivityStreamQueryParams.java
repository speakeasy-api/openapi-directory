package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStopActivityStreamQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetStopActivityStreamActionEnum action;
    public GetStopActivityStreamQueryParams withAction(GetStopActivityStreamActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ApplyImmediately")
    public Boolean applyImmediately;
    public GetStopActivityStreamQueryParams withApplyImmediately(Boolean applyImmediately) {
        this.applyImmediately = applyImmediately;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ResourceArn")
    public String resourceArn;
    public GetStopActivityStreamQueryParams withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetStopActivityStreamVersionEnum version;
    public GetStopActivityStreamQueryParams withVersion(GetStopActivityStreamVersionEnum version) {
        this.version = version;
        return this;
    }
}