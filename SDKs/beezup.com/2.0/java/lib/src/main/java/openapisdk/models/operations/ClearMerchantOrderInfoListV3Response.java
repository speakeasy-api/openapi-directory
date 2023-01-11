package openapisdk.models.operations;



public class ClearMerchantOrderInfoListV3Response {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public ClearMerchantOrderInfoListV3Response withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public ClearMerchantOrderInfoListV3Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ClearMerchantOrderInfoListV3Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BatchOrderOperationResponse batchOrderOperationResponse;
    public ClearMerchantOrderInfoListV3Response withBatchOrderOperationResponse(openapisdk.models.shared.BatchOrderOperationResponse batchOrderOperationResponse) {
        this.batchOrderOperationResponse = batchOrderOperationResponse;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseMessage errorResponseMessage;
    public ClearMerchantOrderInfoListV3Response withErrorResponseMessage(openapisdk.models.shared.ErrorResponseMessage errorResponseMessage) {
        this.errorResponseMessage = errorResponseMessage;
        return this;
    }
}