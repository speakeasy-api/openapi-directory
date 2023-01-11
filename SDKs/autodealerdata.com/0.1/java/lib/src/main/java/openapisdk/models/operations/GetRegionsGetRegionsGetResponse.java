package openapisdk.models.operations;



public class GetRegionsGetRegionsGetResponse {
    public String contentType;
    public GetRegionsGetRegionsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public GetRegionsGetRegionsGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public openapisdk.models.shared.RegionResp regionResp;
    public GetRegionsGetRegionsGetResponse withRegionResp(openapisdk.models.shared.RegionResp regionResp) {
        this.regionResp = regionResp;
        return this;
    }
    public Long statusCode;
    public GetRegionsGetRegionsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}