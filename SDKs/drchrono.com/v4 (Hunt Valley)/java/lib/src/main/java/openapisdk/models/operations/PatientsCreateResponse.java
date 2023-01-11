package openapisdk.models.operations;



public class PatientsCreateResponse {
    public String contentType;
    public PatientsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Patient patient;
    public PatientsCreateResponse withPatient(openapisdk.models.shared.Patient patient) {
        this.patient = patient;
        return this;
    }
    public Long statusCode;
    public PatientsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}