package openapisdk.models.operations;



public class DeleteResourcesByExternalIdResponse {
    public String contentType;
    public DeleteResourcesByExternalIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteResourcesByExternalIdOutput;
    public DeleteResourcesByExternalIdResponse withDeleteResourcesByExternalIdOutput(java.util.Map<String, Object> deleteResourcesByExternalIdOutput) {
        this.deleteResourcesByExternalIdOutput = deleteResourcesByExternalIdOutput;
        return this;
    }
    public Long statusCode;
    public DeleteResourcesByExternalIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}