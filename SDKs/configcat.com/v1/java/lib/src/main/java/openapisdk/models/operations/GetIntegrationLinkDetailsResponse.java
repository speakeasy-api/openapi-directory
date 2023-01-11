package openapisdk.models.operations;



public class GetIntegrationLinkDetailsResponse {
    public String contentType;
    public GetIntegrationLinkDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.IntegrationLinkDetailsModel integrationLinkDetailsModel;
    public GetIntegrationLinkDetailsResponse withIntegrationLinkDetailsModel(openapisdk.models.shared.IntegrationLinkDetailsModel integrationLinkDetailsModel) {
        this.integrationLinkDetailsModel = integrationLinkDetailsModel;
        return this;
    }
    public Long statusCode;
    public GetIntegrationLinkDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}