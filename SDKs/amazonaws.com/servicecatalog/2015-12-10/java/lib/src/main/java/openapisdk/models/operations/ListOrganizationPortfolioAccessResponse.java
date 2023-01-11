package openapisdk.models.operations;



public class ListOrganizationPortfolioAccessResponse {
    public String contentType;
    public ListOrganizationPortfolioAccessResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParametersException;
    public ListOrganizationPortfolioAccessResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public openapisdk.models.shared.ListOrganizationPortfolioAccessOutput listOrganizationPortfolioAccessOutput;
    public ListOrganizationPortfolioAccessResponse withListOrganizationPortfolioAccessOutput(openapisdk.models.shared.ListOrganizationPortfolioAccessOutput listOrganizationPortfolioAccessOutput) {
        this.listOrganizationPortfolioAccessOutput = listOrganizationPortfolioAccessOutput;
        return this;
    }
    public Object operationNotSupportedException;
    public ListOrganizationPortfolioAccessResponse withOperationNotSupportedException(Object operationNotSupportedException) {
        this.operationNotSupportedException = operationNotSupportedException;
        return this;
    }
    public Object resourceNotFoundException;
    public ListOrganizationPortfolioAccessResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListOrganizationPortfolioAccessResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}