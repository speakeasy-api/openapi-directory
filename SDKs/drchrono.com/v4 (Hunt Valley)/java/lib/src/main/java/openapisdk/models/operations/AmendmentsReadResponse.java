package openapisdk.models.operations;



public class AmendmentsReadResponse {
    public String contentType;
    public AmendmentsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PatientAmendment patientAmendment;
    public AmendmentsReadResponse withPatientAmendment(openapisdk.models.shared.PatientAmendment patientAmendment) {
        this.patientAmendment = patientAmendment;
        return this;
    }
    public Long statusCode;
    public AmendmentsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}