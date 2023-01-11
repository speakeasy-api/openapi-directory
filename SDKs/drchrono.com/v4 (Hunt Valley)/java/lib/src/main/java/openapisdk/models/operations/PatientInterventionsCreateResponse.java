package openapisdk.models.operations;



public class PatientInterventionsCreateResponse {
    public String contentType;
    public PatientInterventionsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PatientIntervention patientIntervention;
    public PatientInterventionsCreateResponse withPatientIntervention(openapisdk.models.shared.PatientIntervention patientIntervention) {
        this.patientIntervention = patientIntervention;
        return this;
    }
    public Long statusCode;
    public PatientInterventionsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}