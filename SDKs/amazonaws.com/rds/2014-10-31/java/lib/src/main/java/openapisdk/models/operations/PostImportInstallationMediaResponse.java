package openapisdk.models.operations;



public class PostImportInstallationMediaResponse {
    public byte[] body;
    public PostImportInstallationMediaResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostImportInstallationMediaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostImportInstallationMediaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}