package openapisdk.models.operations;



public class PostGet3dsAvailabilityResponse {
    public String contentType;
    public PostGet3dsAvailabilityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object serviceError;
    public PostGet3dsAvailabilityResponse withServiceError(Object serviceError) {
        this.serviceError = serviceError;
        return this;
    }
    public Long statusCode;
    public PostGet3dsAvailabilityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object threeDSAvailabilityResponse;
    public PostGet3dsAvailabilityResponse withThreeDsAvailabilityResponse(Object threeDSAvailabilityResponse) {
        this.threeDSAvailabilityResponse = threeDSAvailabilityResponse;
        return this;
    }
}