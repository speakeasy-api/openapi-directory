package openapisdk.models.operations;



public class SetMerchantOrderInfoListV3Response {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public SetMerchantOrderInfoListV3Response withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public SetMerchantOrderInfoListV3Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SetMerchantOrderInfoListV3Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BatchOrderOperationResponse batchOrderOperationResponse;
    public SetMerchantOrderInfoListV3Response withBatchOrderOperationResponse(openapisdk.models.shared.BatchOrderOperationResponse batchOrderOperationResponse) {
        this.batchOrderOperationResponse = batchOrderOperationResponse;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseMessage errorResponseMessage;
    public SetMerchantOrderInfoListV3Response withErrorResponseMessage(openapisdk.models.shared.ErrorResponseMessage errorResponseMessage) {
        this.errorResponseMessage = errorResponseMessage;
        return this;
    }
}