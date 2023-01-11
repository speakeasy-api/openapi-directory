package openapisdk.models.operations;



public class BulkUpdateAdsBidByListingIdResponse {
    public openapisdk.models.shared.BulkAdResponse bulkAdResponse;
    public BulkUpdateAdsBidByListingIdResponse withBulkAdResponse(openapisdk.models.shared.BulkAdResponse bulkAdResponse) {
        this.bulkAdResponse = bulkAdResponse;
        return this;
    }
    public String contentType;
    public BulkUpdateAdsBidByListingIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BulkUpdateAdsBidByListingIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}