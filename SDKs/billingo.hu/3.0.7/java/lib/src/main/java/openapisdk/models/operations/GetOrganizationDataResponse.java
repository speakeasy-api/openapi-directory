package openapisdk.models.operations;



public class GetOrganizationDataResponse {
    public openapisdk.models.shared.ClientErrorResponse clientErrorResponse;
    public GetOrganizationDataResponse withClientErrorResponse(openapisdk.models.shared.ClientErrorResponse clientErrorResponse) {
        this.clientErrorResponse = clientErrorResponse;
        return this;
    }
    public String contentType;
    public GetOrganizationDataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetOrganizationDataResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.OrganizationData organizationData;
    public GetOrganizationDataResponse withOrganizationData(openapisdk.models.shared.OrganizationData organizationData) {
        this.organizationData = organizationData;
        return this;
    }
    public openapisdk.models.shared.ServerErrorResponse serverErrorResponse;
    public GetOrganizationDataResponse withServerErrorResponse(openapisdk.models.shared.ServerErrorResponse serverErrorResponse) {
        this.serverErrorResponse = serverErrorResponse;
        return this;
    }
    public Long statusCode;
    public GetOrganizationDataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationErrorResponse validationErrorResponse;
    public GetOrganizationDataResponse withValidationErrorResponse(openapisdk.models.shared.ValidationErrorResponse validationErrorResponse) {
        this.validationErrorResponse = validationErrorResponse;
        return this;
    }
}