package openapisdk.models.operations;



public class GetInvoicesResponse {
    public openapisdk.models.shared.AccountLineItemEntity[] accountLineItemEntities;
    public GetInvoicesResponse withAccountLineItemEntities(openapisdk.models.shared.AccountLineItemEntity[] accountLineItemEntities) {
        this.accountLineItemEntities = accountLineItemEntities;
        return this;
    }
    public String contentType;
    public GetInvoicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetInvoicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}