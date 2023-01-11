package openapisdk.models.operations;



public class LabTestsReadResponse {
    public String contentType;
    public LabTestsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LabTest labTest;
    public LabTestsReadResponse withLabTest(openapisdk.models.shared.LabTest labTest) {
        this.labTest = labTest;
        return this;
    }
    public Long statusCode;
    public LabTestsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}