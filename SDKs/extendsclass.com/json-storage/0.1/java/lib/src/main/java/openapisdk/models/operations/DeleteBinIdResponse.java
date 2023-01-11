package openapisdk.models.operations;



public class DeleteBinIdResponse {
    public String contentType;
    public DeleteBinIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object deleteStatus;
    public DeleteBinIdResponse withDeleteStatus(Object deleteStatus) {
        this.deleteStatus = deleteStatus;
        return this;
    }
    public Object error;
    public DeleteBinIdResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public DeleteBinIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}