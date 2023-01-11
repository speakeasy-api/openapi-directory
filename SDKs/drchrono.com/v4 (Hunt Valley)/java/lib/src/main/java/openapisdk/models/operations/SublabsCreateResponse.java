package openapisdk.models.operations;



public class SublabsCreateResponse {
    public String contentType;
    public SublabsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LabVendorLocation labVendorLocation;
    public SublabsCreateResponse withLabVendorLocation(openapisdk.models.shared.LabVendorLocation labVendorLocation) {
        this.labVendorLocation = labVendorLocation;
        return this;
    }
    public Long statusCode;
    public SublabsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}