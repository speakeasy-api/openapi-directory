package openapisdk.models.operations;



public class ChangeOrderListV2Response {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public ChangeOrderListV2Response withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public ChangeOrderListV2Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ChangeOrderListV2Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BatchOrderOperationResponse batchOrderOperationResponse;
    public ChangeOrderListV2Response withBatchOrderOperationResponse(openapisdk.models.shared.BatchOrderOperationResponse batchOrderOperationResponse) {
        this.batchOrderOperationResponse = batchOrderOperationResponse;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseMessage errorResponseMessage;
    public ChangeOrderListV2Response withErrorResponseMessage(openapisdk.models.shared.ErrorResponseMessage errorResponseMessage) {
        this.errorResponseMessage = errorResponseMessage;
        return this;
    }
}