package openapisdk.models.operations;



public class DeleteTagsResponse {
    public Object badRequest;
    public DeleteTagsResponse withBadRequest(Object badRequest) {
        this.badRequest = badRequest;
        return this;
    }
    public String contentType;
    public DeleteTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object fileSystemNotFound;
    public DeleteTagsResponse withFileSystemNotFound(Object fileSystemNotFound) {
        this.fileSystemNotFound = fileSystemNotFound;
        return this;
    }
    public Object internalServerError;
    public DeleteTagsResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Long statusCode;
    public DeleteTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}