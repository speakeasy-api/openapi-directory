package openapisdk.models.operations;



public class ProblemsCreateResponse {
    public String contentType;
    public ProblemsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PatientProblem patientProblem;
    public ProblemsCreateResponse withPatientProblem(openapisdk.models.shared.PatientProblem patientProblem) {
        this.patientProblem = patientProblem;
        return this;
    }
    public Long statusCode;
    public ProblemsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}