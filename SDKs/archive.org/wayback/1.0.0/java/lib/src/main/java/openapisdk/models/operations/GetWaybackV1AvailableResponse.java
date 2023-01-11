package openapisdk.models.operations;



public class GetWaybackV1AvailableResponse {
    public openapisdk.models.shared.AvailabilityResults availabilityResults;
    public GetWaybackV1AvailableResponse withAvailabilityResults(openapisdk.models.shared.AvailabilityResults availabilityResults) {
        this.availabilityResults = availabilityResults;
        return this;
    }
    public byte[] body;
    public GetWaybackV1AvailableResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetWaybackV1AvailableResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetWaybackV1AvailableResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetWaybackV1AvailableResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}