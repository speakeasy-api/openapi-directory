package openapisdk.models.operations;



public class ChromeFromHtmlPostResponse {
    public openapisdk.models.shared.ApiResponseFailure apiResponseFailure;
    public ChromeFromHtmlPostResponse withApiResponseFailure(openapisdk.models.shared.ApiResponseFailure apiResponseFailure) {
        this.apiResponseFailure = apiResponseFailure;
        return this;
    }
    public openapisdk.models.shared.ApiResponseSuccess apiResponseSuccess;
    public ChromeFromHtmlPostResponse withApiResponseSuccess(openapisdk.models.shared.ApiResponseSuccess apiResponseSuccess) {
        this.apiResponseSuccess = apiResponseSuccess;
        return this;
    }
    public String contentType;
    public ChromeFromHtmlPostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ChromeFromHtmlPostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}