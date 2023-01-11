package openapisdk.models.operations;



public class GetBrandNamesGetBrandsGetResponse {
    public openapisdk.models.shared.BrandResp brandResp;
    public GetBrandNamesGetBrandsGetResponse withBrandResp(openapisdk.models.shared.BrandResp brandResp) {
        this.brandResp = brandResp;
        return this;
    }
    public String contentType;
    public GetBrandNamesGetBrandsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public GetBrandNamesGetBrandsGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public GetBrandNamesGetBrandsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}