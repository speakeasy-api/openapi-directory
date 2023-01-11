package openapisdk.models.operations;



public class WkhtmltopdfFromUrlPostResponse {
    public openapisdk.models.shared.ApiResponseFailure apiResponseFailure;
    public WkhtmltopdfFromUrlPostResponse withApiResponseFailure(openapisdk.models.shared.ApiResponseFailure apiResponseFailure) {
        this.apiResponseFailure = apiResponseFailure;
        return this;
    }
    public openapisdk.models.shared.ApiResponseSuccess apiResponseSuccess;
    public WkhtmltopdfFromUrlPostResponse withApiResponseSuccess(openapisdk.models.shared.ApiResponseSuccess apiResponseSuccess) {
        this.apiResponseSuccess = apiResponseSuccess;
        return this;
    }
    public String contentType;
    public WkhtmltopdfFromUrlPostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public WkhtmltopdfFromUrlPostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}