package openapisdk.models.operations;



public class ExportAddressResponse {
    public String contentType;
    public ExportAddressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ExportAddressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ExportAddress exportAddress;
    public ExportAddressResponse withExportAddress(openapisdk.models.shared.ExportAddress exportAddress) {
        this.exportAddress = exportAddress;
        return this;
    }
}