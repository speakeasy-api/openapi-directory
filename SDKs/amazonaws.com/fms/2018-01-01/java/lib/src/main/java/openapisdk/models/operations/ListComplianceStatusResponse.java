package openapisdk.models.operations;



public class ListComplianceStatusResponse {
    public String contentType;
    public ListComplianceStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public ListComplianceStatusResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public openapisdk.models.shared.ListComplianceStatusResponse listComplianceStatusResponse;
    public ListComplianceStatusResponse withListComplianceStatusResponse(openapisdk.models.shared.ListComplianceStatusResponse listComplianceStatusResponse) {
        this.listComplianceStatusResponse = listComplianceStatusResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListComplianceStatusResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListComplianceStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}