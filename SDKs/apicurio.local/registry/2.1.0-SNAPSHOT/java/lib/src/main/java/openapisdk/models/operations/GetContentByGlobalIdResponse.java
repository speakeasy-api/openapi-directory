package openapisdk.models.operations;



public class GetContentByGlobalIdResponse {
    public String contentType;
    public GetContentByGlobalIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetContentByGlobalIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public byte[] fileContent;
    public GetContentByGlobalIdResponse withFileContent(byte[] fileContent) {
        this.fileContent = fileContent;
        return this;
    }
    public Long statusCode;
    public GetContentByGlobalIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}