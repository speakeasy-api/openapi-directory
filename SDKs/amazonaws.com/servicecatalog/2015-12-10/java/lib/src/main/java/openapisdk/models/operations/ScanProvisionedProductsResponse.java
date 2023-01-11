package openapisdk.models.operations;



public class ScanProvisionedProductsResponse {
    public String contentType;
    public ScanProvisionedProductsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParametersException;
    public ScanProvisionedProductsResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public openapisdk.models.shared.ScanProvisionedProductsOutput scanProvisionedProductsOutput;
    public ScanProvisionedProductsResponse withScanProvisionedProductsOutput(openapisdk.models.shared.ScanProvisionedProductsOutput scanProvisionedProductsOutput) {
        this.scanProvisionedProductsOutput = scanProvisionedProductsOutput;
        return this;
    }
    public Long statusCode;
    public ScanProvisionedProductsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}