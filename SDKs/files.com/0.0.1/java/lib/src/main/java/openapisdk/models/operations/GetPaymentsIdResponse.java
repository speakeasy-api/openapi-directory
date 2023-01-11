package openapisdk.models.operations;



public class GetPaymentsIdResponse {
    public openapisdk.models.shared.AccountLineItemEntity accountLineItemEntity;
    public GetPaymentsIdResponse withAccountLineItemEntity(openapisdk.models.shared.AccountLineItemEntity accountLineItemEntity) {
        this.accountLineItemEntity = accountLineItemEntity;
        return this;
    }
    public String contentType;
    public GetPaymentsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPaymentsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}