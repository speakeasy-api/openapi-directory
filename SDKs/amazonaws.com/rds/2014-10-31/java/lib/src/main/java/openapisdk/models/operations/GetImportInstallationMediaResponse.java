package openapisdk.models.operations;



public class GetImportInstallationMediaResponse {
    public byte[] body;
    public GetImportInstallationMediaResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetImportInstallationMediaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetImportInstallationMediaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}