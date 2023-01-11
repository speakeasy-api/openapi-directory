package openapisdk.models.operations;



public class PutBinIdResponse {
    public String contentType;
    public PutBinIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public PutBinIdResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public PutBinIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object updateStatus;
    public PutBinIdResponse withUpdateStatus(Object updateStatus) {
        this.updateStatus = updateStatus;
        return this;
    }
}