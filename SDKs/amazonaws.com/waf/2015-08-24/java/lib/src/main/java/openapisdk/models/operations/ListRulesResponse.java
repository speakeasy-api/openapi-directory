package openapisdk.models.operations;



public class ListRulesResponse {
    public String contentType;
    public ListRulesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListRulesResponse listRulesResponse;
    public ListRulesResponse withListRulesResponse(openapisdk.models.shared.ListRulesResponse listRulesResponse) {
        this.listRulesResponse = listRulesResponse;
        return this;
    }
    public Long statusCode;
    public ListRulesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public ListRulesResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidAccountException;
    public ListRulesResponse withWafInvalidAccountException(Object wafInvalidAccountException) {
        this.wafInvalidAccountException = wafInvalidAccountException;
        return this;
    }
}