package openapisdk.models.operations;



public class AddEvidenceResponse {
    public openapisdk.models.shared.AddEvidencePaymentDisputeResponse addEvidencePaymentDisputeResponse;
    public AddEvidenceResponse withAddEvidencePaymentDisputeResponse(openapisdk.models.shared.AddEvidencePaymentDisputeResponse addEvidencePaymentDisputeResponse) {
        this.addEvidencePaymentDisputeResponse = addEvidencePaymentDisputeResponse;
        return this;
    }
    public String contentType;
    public AddEvidenceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddEvidenceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}