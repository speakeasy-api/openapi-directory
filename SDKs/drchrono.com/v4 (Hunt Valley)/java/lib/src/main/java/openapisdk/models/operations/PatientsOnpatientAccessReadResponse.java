package openapisdk.models.operations;



public class PatientsOnpatientAccessReadResponse {
    public String contentType;
    public PatientsOnpatientAccessReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Patient patient;
    public PatientsOnpatientAccessReadResponse withPatient(openapisdk.models.shared.Patient patient) {
        this.patient = patient;
        return this;
    }
    public Long statusCode;
    public PatientsOnpatientAccessReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}