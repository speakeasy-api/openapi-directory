package openapisdk.models.operations;



public class ListRegistriesResponse {
    public Object accessDeniedException;
    public ListRegistriesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListRegistriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public ListRegistriesResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public ListRegistriesResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public openapisdk.models.shared.ListRegistriesResponse listRegistriesResponse;
    public ListRegistriesResponse withListRegistriesResponse(openapisdk.models.shared.ListRegistriesResponse listRegistriesResponse) {
        this.listRegistriesResponse = listRegistriesResponse;
        return this;
    }
    public Long statusCode;
    public ListRegistriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}