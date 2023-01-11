package openapisdk.models.operations;



public class LibreConvertPostResponse {
    public openapisdk.models.shared.ApiResponseFailure apiResponseFailure;
    public LibreConvertPostResponse withApiResponseFailure(openapisdk.models.shared.ApiResponseFailure apiResponseFailure) {
        this.apiResponseFailure = apiResponseFailure;
        return this;
    }
    public openapisdk.models.shared.ApiResponseSuccess apiResponseSuccess;
    public LibreConvertPostResponse withApiResponseSuccess(openapisdk.models.shared.ApiResponseSuccess apiResponseSuccess) {
        this.apiResponseSuccess = apiResponseSuccess;
        return this;
    }
    public String contentType;
    public LibreConvertPostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LibreConvertPostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}