package openapisdk.models.operations;



public class ListRulesPackagesResponse {
    public Object accessDeniedException;
    public ListRulesPackagesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListRulesPackagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public ListRulesPackagesResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidInputException;
    public ListRulesPackagesResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public openapisdk.models.shared.ListRulesPackagesResponse listRulesPackagesResponse;
    public ListRulesPackagesResponse withListRulesPackagesResponse(openapisdk.models.shared.ListRulesPackagesResponse listRulesPackagesResponse) {
        this.listRulesPackagesResponse = listRulesPackagesResponse;
        return this;
    }
    public Long statusCode;
    public ListRulesPackagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}