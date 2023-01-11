package openapisdk.models.operations;



public class CreateMicrosoftAdResponse {
    public Object clientException;
    public CreateMicrosoftAdResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public CreateMicrosoftAdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateMicrosoftAdResult createMicrosoftADResult;
    public CreateMicrosoftAdResponse withCreateMicrosoftAdResult(openapisdk.models.shared.CreateMicrosoftAdResult createMicrosoftADResult) {
        this.createMicrosoftADResult = createMicrosoftADResult;
        return this;
    }
    public Object directoryLimitExceededException;
    public CreateMicrosoftAdResponse withDirectoryLimitExceededException(Object directoryLimitExceededException) {
        this.directoryLimitExceededException = directoryLimitExceededException;
        return this;
    }
    public Object invalidParameterException;
    public CreateMicrosoftAdResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serviceException;
    public CreateMicrosoftAdResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public CreateMicrosoftAdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public CreateMicrosoftAdResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}