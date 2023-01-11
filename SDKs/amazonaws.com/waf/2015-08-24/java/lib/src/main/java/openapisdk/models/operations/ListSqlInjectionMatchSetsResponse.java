package openapisdk.models.operations;



public class ListSqlInjectionMatchSetsResponse {
    public String contentType;
    public ListSqlInjectionMatchSetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListSqlInjectionMatchSetsResponse listSqlInjectionMatchSetsResponse;
    public ListSqlInjectionMatchSetsResponse withListSqlInjectionMatchSetsResponse(openapisdk.models.shared.ListSqlInjectionMatchSetsResponse listSqlInjectionMatchSetsResponse) {
        this.listSqlInjectionMatchSetsResponse = listSqlInjectionMatchSetsResponse;
        return this;
    }
    public Long statusCode;
    public ListSqlInjectionMatchSetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public ListSqlInjectionMatchSetsResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidAccountException;
    public ListSqlInjectionMatchSetsResponse withWafInvalidAccountException(Object wafInvalidAccountException) {
        this.wafInvalidAccountException = wafInvalidAccountException;
        return this;
    }
}