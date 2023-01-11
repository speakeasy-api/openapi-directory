package openapisdk.models.operations;



public class PatientFlagTypesReadResponse {
    public String contentType;
    public PatientFlagTypesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PatientFlagType patientFlagType;
    public PatientFlagTypesReadResponse withPatientFlagType(openapisdk.models.shared.PatientFlagType patientFlagType) {
        this.patientFlagType = patientFlagType;
        return this;
    }
    public Long statusCode;
    public PatientFlagTypesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}