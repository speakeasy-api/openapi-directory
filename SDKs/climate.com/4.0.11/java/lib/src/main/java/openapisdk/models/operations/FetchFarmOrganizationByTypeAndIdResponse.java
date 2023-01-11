package openapisdk.models.operations;



public class FetchFarmOrganizationByTypeAndIdResponse {
    public String contentType;
    public FetchFarmOrganizationByTypeAndIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public FetchFarmOrganizationByTypeAndIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Object farmOrganization;
    public FetchFarmOrganizationByTypeAndIdResponse withFarmOrganization(Object farmOrganization) {
        this.farmOrganization = farmOrganization;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public FetchFarmOrganizationByTypeAndIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public FetchFarmOrganizationByTypeAndIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}