package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChangeMessageVisibilityQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetChangeMessageVisibilityActionEnum action;
    public GetChangeMessageVisibilityQueryParams withAction(GetChangeMessageVisibilityActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ReceiptHandle")
    public String receiptHandle;
    public GetChangeMessageVisibilityQueryParams withReceiptHandle(String receiptHandle) {
        this.receiptHandle = receiptHandle;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetChangeMessageVisibilityVersionEnum version;
    public GetChangeMessageVisibilityQueryParams withVersion(GetChangeMessageVisibilityVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VisibilityTimeout")
    public Long visibilityTimeout;
    public GetChangeMessageVisibilityQueryParams withVisibilityTimeout(Long visibilityTimeout) {
        this.visibilityTimeout = visibilityTimeout;
        return this;
    }
}