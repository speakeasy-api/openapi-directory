package openapisdk.models.operations;



public class GetChangeTokenResponse {
    public String contentType;
    public GetChangeTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetChangeTokenResponse getChangeTokenResponse;
    public GetChangeTokenResponse withGetChangeTokenResponse(openapisdk.models.shared.GetChangeTokenResponse getChangeTokenResponse) {
        this.getChangeTokenResponse = getChangeTokenResponse;
        return this;
    }
    public Long statusCode;
    public GetChangeTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public GetChangeTokenResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
}