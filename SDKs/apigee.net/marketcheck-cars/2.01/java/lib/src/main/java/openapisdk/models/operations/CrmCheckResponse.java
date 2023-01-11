package openapisdk.models.operations;



public class CrmCheckResponse {
    public openapisdk.models.shared.CrmResponse crmResponse;
    public CrmCheckResponse withCrmResponse(openapisdk.models.shared.CrmResponse crmResponse) {
        this.crmResponse = crmResponse;
        return this;
    }
    public String contentType;
    public CrmCheckResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public CrmCheckResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public CrmCheckResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}