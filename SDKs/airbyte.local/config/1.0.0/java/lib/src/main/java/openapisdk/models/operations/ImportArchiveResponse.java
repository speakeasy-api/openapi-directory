package openapisdk.models.operations;



public class ImportArchiveResponse {
    public String contentType;
    public ImportArchiveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ImportRead importRead;
    public ImportArchiveResponse withImportRead(openapisdk.models.shared.ImportRead importRead) {
        this.importRead = importRead;
        return this;
    }
    public Long statusCode;
    public ImportArchiveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}