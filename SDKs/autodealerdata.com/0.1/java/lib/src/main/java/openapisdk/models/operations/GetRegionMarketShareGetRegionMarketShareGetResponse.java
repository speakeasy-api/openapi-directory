package openapisdk.models.operations;



public class GetRegionMarketShareGetRegionMarketShareGetResponse {
    public String contentType;
    public GetRegionMarketShareGetRegionMarketShareGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GenericResponse genericResponse;
    public GetRegionMarketShareGetRegionMarketShareGetResponse withGenericResponse(openapisdk.models.shared.GenericResponse genericResponse) {
        this.genericResponse = genericResponse;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public GetRegionMarketShareGetRegionMarketShareGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public GetRegionMarketShareGetRegionMarketShareGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}