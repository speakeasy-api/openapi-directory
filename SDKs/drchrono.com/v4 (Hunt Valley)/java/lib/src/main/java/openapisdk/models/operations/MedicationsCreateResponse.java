package openapisdk.models.operations;



public class MedicationsCreateResponse {
    public String contentType;
    public MedicationsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PatientDrug patientDrug;
    public MedicationsCreateResponse withPatientDrug(openapisdk.models.shared.PatientDrug patientDrug) {
        this.patientDrug = patientDrug;
        return this;
    }
    public Long statusCode;
    public MedicationsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}