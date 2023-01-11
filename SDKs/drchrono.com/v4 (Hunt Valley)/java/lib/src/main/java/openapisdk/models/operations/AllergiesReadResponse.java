package openapisdk.models.operations;



public class AllergiesReadResponse {
    public String contentType;
    public AllergiesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PatientAllergy patientAllergy;
    public AllergiesReadResponse withPatientAllergy(openapisdk.models.shared.PatientAllergy patientAllergy) {
        this.patientAllergy = patientAllergy;
        return this;
    }
    public Long statusCode;
    public AllergiesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}