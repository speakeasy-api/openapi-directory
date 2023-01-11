package openapisdk.models.operations;



public class ListRulesResponse {
    public String contentType;
    public ListRulesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public ListRulesResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public openapisdk.models.shared.ListRulesResponse listRulesResponse;
    public ListRulesResponse withListRulesResponse(openapisdk.models.shared.ListRulesResponse listRulesResponse) {
        this.listRulesResponse = listRulesResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListRulesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListRulesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}