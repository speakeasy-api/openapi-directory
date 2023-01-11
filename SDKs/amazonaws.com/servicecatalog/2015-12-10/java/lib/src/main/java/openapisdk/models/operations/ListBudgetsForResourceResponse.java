package openapisdk.models.operations;



public class ListBudgetsForResourceResponse {
    public String contentType;
    public ListBudgetsForResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParametersException;
    public ListBudgetsForResourceResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public openapisdk.models.shared.ListBudgetsForResourceOutput listBudgetsForResourceOutput;
    public ListBudgetsForResourceResponse withListBudgetsForResourceOutput(openapisdk.models.shared.ListBudgetsForResourceOutput listBudgetsForResourceOutput) {
        this.listBudgetsForResourceOutput = listBudgetsForResourceOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public ListBudgetsForResourceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListBudgetsForResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}