package openapisdk.models.operations;



public class ChangeOrderListV3Response {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public ChangeOrderListV3Response withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public ChangeOrderListV3Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ChangeOrderListV3Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BatchOrderOperationResponse batchOrderOperationResponse;
    public ChangeOrderListV3Response withBatchOrderOperationResponse(openapisdk.models.shared.BatchOrderOperationResponse batchOrderOperationResponse) {
        this.batchOrderOperationResponse = batchOrderOperationResponse;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseMessage errorResponseMessage;
    public ChangeOrderListV3Response withErrorResponseMessage(openapisdk.models.shared.ErrorResponseMessage errorResponseMessage) {
        this.errorResponseMessage = errorResponseMessage;
        return this;
    }
}