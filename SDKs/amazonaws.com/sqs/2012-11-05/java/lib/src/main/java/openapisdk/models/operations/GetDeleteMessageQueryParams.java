package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteMessageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteMessageActionEnum action;
    public GetDeleteMessageQueryParams withAction(GetDeleteMessageActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ReceiptHandle")
    public String receiptHandle;
    public GetDeleteMessageQueryParams withReceiptHandle(String receiptHandle) {
        this.receiptHandle = receiptHandle;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteMessageVersionEnum version;
    public GetDeleteMessageQueryParams withVersion(GetDeleteMessageVersionEnum version) {
        this.version = version;
        return this;
    }
}