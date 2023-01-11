package openapisdk.models.operations;



public class PatientsOnpatientAccessCreateResponse {
    public String contentType;
    public PatientsOnpatientAccessCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Patient patient;
    public PatientsOnpatientAccessCreateResponse withPatient(openapisdk.models.shared.Patient patient) {
        this.patient = patient;
        return this;
    }
    public Long statusCode;
    public PatientsOnpatientAccessCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}