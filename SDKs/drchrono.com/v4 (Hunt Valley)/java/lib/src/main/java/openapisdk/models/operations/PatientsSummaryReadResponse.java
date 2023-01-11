package openapisdk.models.operations;



public class PatientsSummaryReadResponse {
    public String contentType;
    public PatientsSummaryReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Patient patient;
    public PatientsSummaryReadResponse withPatient(openapisdk.models.shared.Patient patient) {
        this.patient = patient;
        return this;
    }
    public Long statusCode;
    public PatientsSummaryReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}