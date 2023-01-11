package openapisdk.models.operations;



public class ExportDataResponse {
    public String contentType;
    public ExportDataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public ExportDataResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public byte[] fileContent;
    public ExportDataResponse withFileContent(byte[] fileContent) {
        this.fileContent = fileContent;
        return this;
    }
    public Long statusCode;
    public ExportDataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}