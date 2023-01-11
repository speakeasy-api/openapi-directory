package openapisdk.models.operations;



public class ListIpSetsResponse {
    public String contentType;
    public ListIpSetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListIpSetsResponse listIPSetsResponse;
    public ListIpSetsResponse withListIpSetsResponse(openapisdk.models.shared.ListIpSetsResponse listIPSetsResponse) {
        this.listIPSetsResponse = listIPSetsResponse;
        return this;
    }
    public Long statusCode;
    public ListIpSetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public ListIpSetsResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidAccountException;
    public ListIpSetsResponse withWafInvalidAccountException(Object wafInvalidAccountException) {
        this.wafInvalidAccountException = wafInvalidAccountException;
        return this;
    }
}