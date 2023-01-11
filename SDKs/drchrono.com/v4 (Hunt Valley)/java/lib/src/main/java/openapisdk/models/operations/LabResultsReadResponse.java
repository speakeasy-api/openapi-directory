package openapisdk.models.operations;



public class LabResultsReadResponse {
    public String contentType;
    public LabResultsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LabResult labResult;
    public LabResultsReadResponse withLabResult(openapisdk.models.shared.LabResult labResult) {
        this.labResult = labResult;
        return this;
    }
    public Long statusCode;
    public LabResultsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}