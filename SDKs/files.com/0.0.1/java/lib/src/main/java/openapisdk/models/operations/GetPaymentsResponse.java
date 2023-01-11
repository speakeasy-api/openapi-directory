package openapisdk.models.operations;



public class GetPaymentsResponse {
    public openapisdk.models.shared.AccountLineItemEntity[] accountLineItemEntities;
    public GetPaymentsResponse withAccountLineItemEntities(openapisdk.models.shared.AccountLineItemEntity[] accountLineItemEntities) {
        this.accountLineItemEntities = accountLineItemEntities;
        return this;
    }
    public String contentType;
    public GetPaymentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPaymentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}