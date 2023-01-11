package openapisdk.models.operations;



public class GetChannelCatalogExclusionFiltersResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public GetChannelCatalogExclusionFiltersResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public GetChannelCatalogExclusionFiltersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetChannelCatalogExclusionFiltersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ExclusionFiltersResponse exclusionFiltersResponse;
    public GetChannelCatalogExclusionFiltersResponse withExclusionFiltersResponse(openapisdk.models.shared.ExclusionFiltersResponse exclusionFiltersResponse) {
        this.exclusionFiltersResponse = exclusionFiltersResponse;
        return this;
    }
}