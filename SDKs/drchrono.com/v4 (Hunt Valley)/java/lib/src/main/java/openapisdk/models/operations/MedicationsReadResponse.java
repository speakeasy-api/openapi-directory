package openapisdk.models.operations;



public class MedicationsReadResponse {
    public String contentType;
    public MedicationsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PatientDrug patientDrug;
    public MedicationsReadResponse withPatientDrug(openapisdk.models.shared.PatientDrug patientDrug) {
        this.patientDrug = patientDrug;
        return this;
    }
    public Long statusCode;
    public MedicationsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}