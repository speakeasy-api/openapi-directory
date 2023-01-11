package openapisdk.models.operations;



public class GetContentByHashResponse {
    public String contentType;
    public GetContentByHashResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetContentByHashResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public byte[] fileContent;
    public GetContentByHashResponse withFileContent(byte[] fileContent) {
        this.fileContent = fileContent;
        return this;
    }
    public Long statusCode;
    public GetContentByHashResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}