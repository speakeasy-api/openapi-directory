package openapisdk.models.operations;



public class GetChannelCatalogFilterOperatorsResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public GetChannelCatalogFilterOperatorsResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public GetChannelCatalogFilterOperatorsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetChannelCatalogFilterOperatorsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.FilterOperator[] filterOperators;
    public GetChannelCatalogFilterOperatorsResponse withFilterOperators(openapisdk.models.shared.FilterOperator[] filterOperators) {
        this.filterOperators = filterOperators;
        return this;
    }
}