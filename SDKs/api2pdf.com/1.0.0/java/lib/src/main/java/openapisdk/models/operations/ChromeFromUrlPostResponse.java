package openapisdk.models.operations;



public class ChromeFromUrlPostResponse {
    public openapisdk.models.shared.ApiResponseFailure apiResponseFailure;
    public ChromeFromUrlPostResponse withApiResponseFailure(openapisdk.models.shared.ApiResponseFailure apiResponseFailure) {
        this.apiResponseFailure = apiResponseFailure;
        return this;
    }
    public openapisdk.models.shared.ApiResponseSuccess apiResponseSuccess;
    public ChromeFromUrlPostResponse withApiResponseSuccess(openapisdk.models.shared.ApiResponseSuccess apiResponseSuccess) {
        this.apiResponseSuccess = apiResponseSuccess;
        return this;
    }
    public String contentType;
    public ChromeFromUrlPostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ChromeFromUrlPostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}