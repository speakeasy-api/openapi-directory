package openapisdk.models.operations;



public class CreateEventTrackerResponse {
    public String contentType;
    public CreateEventTrackerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateEventTrackerResponse createEventTrackerResponse;
    public CreateEventTrackerResponse withCreateEventTrackerResponse(openapisdk.models.shared.CreateEventTrackerResponse createEventTrackerResponse) {
        this.createEventTrackerResponse = createEventTrackerResponse;
        return this;
    }
    public Object invalidInputException;
    public CreateEventTrackerResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public CreateEventTrackerResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateEventTrackerResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object resourceInUseException;
    public CreateEventTrackerResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateEventTrackerResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateEventTrackerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}