package openapisdk.models.operations;



public class SetMerchantOrderInfoListResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public SetMerchantOrderInfoListResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public SetMerchantOrderInfoListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SetMerchantOrderInfoListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BatchOrderOperationResponse batchOrderOperationResponse;
    public SetMerchantOrderInfoListResponse withBatchOrderOperationResponse(openapisdk.models.shared.BatchOrderOperationResponse batchOrderOperationResponse) {
        this.batchOrderOperationResponse = batchOrderOperationResponse;
        return this;
    }
}