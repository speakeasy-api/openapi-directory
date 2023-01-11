package openapisdk.models.operations;



public class GetInvoicesIdResponse {
    public openapisdk.models.shared.AccountLineItemEntity accountLineItemEntity;
    public GetInvoicesIdResponse withAccountLineItemEntity(openapisdk.models.shared.AccountLineItemEntity accountLineItemEntity) {
        this.accountLineItemEntity = accountLineItemEntity;
        return this;
    }
    public String contentType;
    public GetInvoicesIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetInvoicesIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}