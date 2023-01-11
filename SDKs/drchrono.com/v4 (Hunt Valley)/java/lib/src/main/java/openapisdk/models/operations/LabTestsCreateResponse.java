package openapisdk.models.operations;



public class LabTestsCreateResponse {
    public String contentType;
    public LabTestsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LabTest labTest;
    public LabTestsCreateResponse withLabTest(openapisdk.models.shared.LabTest labTest) {
        this.labTest = labTest;
        return this;
    }
    public Long statusCode;
    public LabTestsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}