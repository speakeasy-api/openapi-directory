package openapisdk.models.operations;



public class ListWebAcLsResponse {
    public String contentType;
    public ListWebAcLsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListWebAcLsResponse listWebACLsResponse;
    public ListWebAcLsResponse withListWebAcLsResponse(openapisdk.models.shared.ListWebAcLsResponse listWebACLsResponse) {
        this.listWebACLsResponse = listWebACLsResponse;
        return this;
    }
    public Long statusCode;
    public ListWebAcLsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public ListWebAcLsResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidAccountException;
    public ListWebAcLsResponse withWafInvalidAccountException(Object wafInvalidAccountException) {
        this.wafInvalidAccountException = wafInvalidAccountException;
        return this;
    }
}