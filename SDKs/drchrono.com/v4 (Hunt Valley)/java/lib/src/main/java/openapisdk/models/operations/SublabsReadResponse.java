package openapisdk.models.operations;



public class SublabsReadResponse {
    public String contentType;
    public SublabsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LabVendorLocation labVendorLocation;
    public SublabsReadResponse withLabVendorLocation(openapisdk.models.shared.LabVendorLocation labVendorLocation) {
        this.labVendorLocation = labVendorLocation;
        return this;
    }
    public Long statusCode;
    public SublabsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}