package openapisdk.models.operations;



public class AmendmentsCreateResponse {
    public String contentType;
    public AmendmentsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PatientAmendment patientAmendment;
    public AmendmentsCreateResponse withPatientAmendment(openapisdk.models.shared.PatientAmendment patientAmendment) {
        this.patientAmendment = patientAmendment;
        return this;
    }
    public Long statusCode;
    public AmendmentsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}