package openapisdk.models.operations;



public class UpdateActivityOnQueueResponse {
    public String contentType;
    public UpdateActivityOnQueueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateActivityOnQueueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateActivityResponse updateActivityResponse;
    public UpdateActivityOnQueueResponse withUpdateActivityResponse(openapisdk.models.shared.UpdateActivityResponse updateActivityResponse) {
        this.updateActivityResponse = updateActivityResponse;
        return this;
    }
}