package openapisdk.models.operations;



public class AllergiesCreateResponse {
    public String contentType;
    public AllergiesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PatientAllergy patientAllergy;
    public AllergiesCreateResponse withPatientAllergy(openapisdk.models.shared.PatientAllergy patientAllergy) {
        this.patientAllergy = patientAllergy;
        return this;
    }
    public Long statusCode;
    public AllergiesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}