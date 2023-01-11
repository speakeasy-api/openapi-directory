package openapisdk.models.operations;



public class PatientFlagTypesCreateResponse {
    public String contentType;
    public PatientFlagTypesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PatientFlagType patientFlagType;
    public PatientFlagTypesCreateResponse withPatientFlagType(openapisdk.models.shared.PatientFlagType patientFlagType) {
        this.patientFlagType = patientFlagType;
        return this;
    }
    public Long statusCode;
    public PatientFlagTypesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}