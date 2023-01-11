package openapisdk.models.operations;



public class PatchBinIdResponse {
    public String contentType;
    public PatchBinIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public PatchBinIdResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public PatchBinIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object updateStatus;
    public PatchBinIdResponse withUpdateStatus(Object updateStatus) {
        this.updateStatus = updateStatus;
        return this;
    }
}