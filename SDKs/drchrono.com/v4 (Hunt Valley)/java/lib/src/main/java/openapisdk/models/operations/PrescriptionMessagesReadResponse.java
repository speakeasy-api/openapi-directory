package openapisdk.models.operations;



public class PrescriptionMessagesReadResponse {
    public String contentType;
    public PrescriptionMessagesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PrescriptionMessage prescriptionMessage;
    public PrescriptionMessagesReadResponse withPrescriptionMessage(openapisdk.models.shared.PrescriptionMessage prescriptionMessage) {
        this.prescriptionMessage = prescriptionMessage;
        return this;
    }
    public Long statusCode;
    public PrescriptionMessagesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}