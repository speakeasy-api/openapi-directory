package openapisdk.models.operations;



public class GetDirectDebitMandatesResponse {
    public String contentType;
    public GetDirectDebitMandatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public GetDirectDebitMandatesMandates mandates;
    public GetDirectDebitMandatesResponse withMandates(GetDirectDebitMandatesMandates mandates) {
        this.mandates = mandates;
        return this;
    }
    public Long statusCode;
    public GetDirectDebitMandatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}