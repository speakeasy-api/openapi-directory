package openapisdk.models.operations;



public class ImportAddressResponse {
    public String contentType;
    public ImportAddressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ImportAddressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ImportAddress importAddress;
    public ImportAddressResponse withImportAddress(openapisdk.models.shared.ImportAddress importAddress) {
        this.importAddress = importAddress;
        return this;
    }
}