package openapisdk.models.operations;



public class GetSampledRequestsResponse {
    public String contentType;
    public GetSampledRequestsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetSampledRequestsResponse getSampledRequestsResponse;
    public GetSampledRequestsResponse withGetSampledRequestsResponse(openapisdk.models.shared.GetSampledRequestsResponse getSampledRequestsResponse) {
        this.getSampledRequestsResponse = getSampledRequestsResponse;
        return this;
    }
    public Long statusCode;
    public GetSampledRequestsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public GetSampledRequestsResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafNonexistentItemException;
    public GetSampledRequestsResponse withWafNonexistentItemException(Object wafNonexistentItemException) {
        this.wafNonexistentItemException = wafNonexistentItemException;
        return this;
    }
}