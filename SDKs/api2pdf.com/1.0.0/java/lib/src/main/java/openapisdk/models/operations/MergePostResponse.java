package openapisdk.models.operations;



public class MergePostResponse {
    public openapisdk.models.shared.ApiResponseFailure apiResponseFailure;
    public MergePostResponse withApiResponseFailure(openapisdk.models.shared.ApiResponseFailure apiResponseFailure) {
        this.apiResponseFailure = apiResponseFailure;
        return this;
    }
    public openapisdk.models.shared.ApiResponseSuccess apiResponseSuccess;
    public MergePostResponse withApiResponseSuccess(openapisdk.models.shared.ApiResponseSuccess apiResponseSuccess) {
        this.apiResponseSuccess = apiResponseSuccess;
        return this;
    }
    public String contentType;
    public MergePostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MergePostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}