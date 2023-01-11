package openapisdk.models.operations;



public class WkhtmltopdfFromHtmlPostResponse {
    public openapisdk.models.shared.ApiResponseFailure apiResponseFailure;
    public WkhtmltopdfFromHtmlPostResponse withApiResponseFailure(openapisdk.models.shared.ApiResponseFailure apiResponseFailure) {
        this.apiResponseFailure = apiResponseFailure;
        return this;
    }
    public openapisdk.models.shared.ApiResponseSuccess apiResponseSuccess;
    public WkhtmltopdfFromHtmlPostResponse withApiResponseSuccess(openapisdk.models.shared.ApiResponseSuccess apiResponseSuccess) {
        this.apiResponseSuccess = apiResponseSuccess;
        return this;
    }
    public String contentType;
    public WkhtmltopdfFromHtmlPostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public WkhtmltopdfFromHtmlPostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}