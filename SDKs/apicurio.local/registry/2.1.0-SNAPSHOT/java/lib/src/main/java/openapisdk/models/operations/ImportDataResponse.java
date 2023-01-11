package openapisdk.models.operations;



public class ImportDataResponse {
    public String contentType;
    public ImportDataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public ImportDataResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public ImportDataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}