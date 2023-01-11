package openapisdk.models.operations;



public class PatientsSummaryCreateResponse {
    public String contentType;
    public PatientsSummaryCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Patient patient;
    public PatientsSummaryCreateResponse withPatient(openapisdk.models.shared.Patient patient) {
        this.patient = patient;
        return this;
    }
    public Long statusCode;
    public PatientsSummaryCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}