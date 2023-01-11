package openapisdk.models.operations;



public class GetRegionBrandMarketShareGetRegionBrandMarketShareGetResponse {
    public String contentType;
    public GetRegionBrandMarketShareGetRegionBrandMarketShareGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GenericResponse genericResponse;
    public GetRegionBrandMarketShareGetRegionBrandMarketShareGetResponse withGenericResponse(openapisdk.models.shared.GenericResponse genericResponse) {
        this.genericResponse = genericResponse;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public GetRegionBrandMarketShareGetRegionBrandMarketShareGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public GetRegionBrandMarketShareGetRegionBrandMarketShareGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}