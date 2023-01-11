package openapisdk.models.operations;



public class UpdatePartnerResponse {
    public openapisdk.models.shared.ClientErrorResponse clientErrorResponse;
    public UpdatePartnerResponse withClientErrorResponse(openapisdk.models.shared.ClientErrorResponse clientErrorResponse) {
        this.clientErrorResponse = clientErrorResponse;
        return this;
    }
    public String contentType;
    public UpdatePartnerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public UpdatePartnerResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.Partner partner;
    public UpdatePartnerResponse withPartner(openapisdk.models.shared.Partner partner) {
        this.partner = partner;
        return this;
    }
    public openapisdk.models.shared.ServerErrorResponse serverErrorResponse;
    public UpdatePartnerResponse withServerErrorResponse(openapisdk.models.shared.ServerErrorResponse serverErrorResponse) {
        this.serverErrorResponse = serverErrorResponse;
        return this;
    }
    public Long statusCode;
    public UpdatePartnerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationErrorResponse validationErrorResponse;
    public UpdatePartnerResponse withValidationErrorResponse(openapisdk.models.shared.ValidationErrorResponse validationErrorResponse) {
        this.validationErrorResponse = validationErrorResponse;
        return this;
    }
}