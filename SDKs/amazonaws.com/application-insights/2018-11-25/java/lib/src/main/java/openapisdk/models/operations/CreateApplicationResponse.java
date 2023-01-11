package openapisdk.models.operations;



public class CreateApplicationResponse {
    public Object accessDeniedException;
    public CreateApplicationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateApplicationResponse createApplicationResponse;
    public CreateApplicationResponse withCreateApplicationResponse(openapisdk.models.shared.CreateApplicationResponse createApplicationResponse) {
        this.createApplicationResponse = createApplicationResponse;
        return this;
    }
    public Object internalServerException;
    public CreateApplicationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceInUseException;
    public CreateApplicationResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateApplicationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tagsAlreadyExistException;
    public CreateApplicationResponse withTagsAlreadyExistException(Object tagsAlreadyExistException) {
        this.tagsAlreadyExistException = tagsAlreadyExistException;
        return this;
    }
    public Object validationException;
    public CreateApplicationResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}