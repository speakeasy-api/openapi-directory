package openapisdk.models.operations;



public class ProblemsReadResponse {
    public String contentType;
    public ProblemsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PatientProblem patientProblem;
    public ProblemsReadResponse withPatientProblem(openapisdk.models.shared.PatientProblem patientProblem) {
        this.patientProblem = patientProblem;
        return this;
    }
    public Long statusCode;
    public ProblemsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}