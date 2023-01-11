package openapisdk.models.operations;



public class ListPartnerResponse {
    public openapisdk.models.shared.ClientErrorResponse clientErrorResponse;
    public ListPartnerResponse withClientErrorResponse(openapisdk.models.shared.ClientErrorResponse clientErrorResponse) {
        this.clientErrorResponse = clientErrorResponse;
        return this;
    }
    public String contentType;
    public ListPartnerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListPartnerResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PartnerList partnerList;
    public ListPartnerResponse withPartnerList(openapisdk.models.shared.PartnerList partnerList) {
        this.partnerList = partnerList;
        return this;
    }
    public openapisdk.models.shared.ServerErrorResponse serverErrorResponse;
    public ListPartnerResponse withServerErrorResponse(openapisdk.models.shared.ServerErrorResponse serverErrorResponse) {
        this.serverErrorResponse = serverErrorResponse;
        return this;
    }
    public Long statusCode;
    public ListPartnerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationErrorResponse validationErrorResponse;
    public ListPartnerResponse withValidationErrorResponse(openapisdk.models.shared.ValidationErrorResponse validationErrorResponse) {
        this.validationErrorResponse = validationErrorResponse;
        return this;
    }
}