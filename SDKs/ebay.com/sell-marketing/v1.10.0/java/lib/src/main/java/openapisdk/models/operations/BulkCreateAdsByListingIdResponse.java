package openapisdk.models.operations;



public class BulkCreateAdsByListingIdResponse {
    public openapisdk.models.shared.BulkAdResponse bulkAdResponse;
    public BulkCreateAdsByListingIdResponse withBulkAdResponse(openapisdk.models.shared.BulkAdResponse bulkAdResponse) {
        this.bulkAdResponse = bulkAdResponse;
        return this;
    }
    public String contentType;
    public BulkCreateAdsByListingIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BulkCreateAdsByListingIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}