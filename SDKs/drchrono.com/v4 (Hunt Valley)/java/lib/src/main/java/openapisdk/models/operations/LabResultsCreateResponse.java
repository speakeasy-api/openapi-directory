package openapisdk.models.operations;



public class LabResultsCreateResponse {
    public String contentType;
    public LabResultsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LabResult labResult;
    public LabResultsCreateResponse withLabResult(openapisdk.models.shared.LabResult labResult) {
        this.labResult = labResult;
        return this;
    }
    public Long statusCode;
    public LabResultsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}