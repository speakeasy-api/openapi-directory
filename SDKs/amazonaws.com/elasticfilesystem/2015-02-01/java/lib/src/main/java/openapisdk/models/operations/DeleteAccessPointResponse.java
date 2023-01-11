package openapisdk.models.operations;



public class DeleteAccessPointResponse {
    public Object accessPointNotFound;
    public DeleteAccessPointResponse withAccessPointNotFound(Object accessPointNotFound) {
        this.accessPointNotFound = accessPointNotFound;
        return this;
    }
    public Object badRequest;
    public DeleteAccessPointResponse withBadRequest(Object badRequest) {
        this.badRequest = badRequest;
        return this;
    }
    public String contentType;
    public DeleteAccessPointResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerError;
    public DeleteAccessPointResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Long statusCode;
    public DeleteAccessPointResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}