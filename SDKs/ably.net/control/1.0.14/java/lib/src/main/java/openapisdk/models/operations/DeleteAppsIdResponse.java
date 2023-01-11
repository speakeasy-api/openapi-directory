package openapisdk.models.operations;



public class DeleteAppsIdResponse {
    public String contentType;
    public DeleteAppsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteAppsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public DeleteAppsIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
}