package openapisdk.models.operations;



public class BulkDeleteAdsByListingIdResponse {
    public openapisdk.models.shared.BulkDeleteAdResponse bulkDeleteAdResponse;
    public BulkDeleteAdsByListingIdResponse withBulkDeleteAdResponse(openapisdk.models.shared.BulkDeleteAdResponse bulkDeleteAdResponse) {
        this.bulkDeleteAdResponse = bulkDeleteAdResponse;
        return this;
    }
    public String contentType;
    public BulkDeleteAdsByListingIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BulkDeleteAdsByListingIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}