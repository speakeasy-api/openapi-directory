package openapisdk.models.operations;



public class PatientInterventionsReadResponse {
    public String contentType;
    public PatientInterventionsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PatientIntervention patientIntervention;
    public PatientInterventionsReadResponse withPatientIntervention(openapisdk.models.shared.PatientIntervention patientIntervention) {
        this.patientIntervention = patientIntervention;
        return this;
    }
    public Long statusCode;
    public PatientInterventionsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}