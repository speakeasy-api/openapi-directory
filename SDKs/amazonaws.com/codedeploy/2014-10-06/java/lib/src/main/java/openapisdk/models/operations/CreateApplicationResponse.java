package openapisdk.models.operations;



public class CreateApplicationResponse {
    public Object applicationAlreadyExistsException;
    public CreateApplicationResponse withApplicationAlreadyExistsException(Object applicationAlreadyExistsException) {
        this.applicationAlreadyExistsException = applicationAlreadyExistsException;
        return this;
    }
    public Object applicationLimitExceededException;
    public CreateApplicationResponse withApplicationLimitExceededException(Object applicationLimitExceededException) {
        this.applicationLimitExceededException = applicationLimitExceededException;
        return this;
    }
    public Object applicationNameRequiredException;
    public CreateApplicationResponse withApplicationNameRequiredException(Object applicationNameRequiredException) {
        this.applicationNameRequiredException = applicationNameRequiredException;
        return this;
    }
    public String contentType;
    public CreateApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateApplicationOutput createApplicationOutput;
    public CreateApplicationResponse withCreateApplicationOutput(openapisdk.models.shared.CreateApplicationOutput createApplicationOutput) {
        this.createApplicationOutput = createApplicationOutput;
        return this;
    }
    public Object invalidApplicationNameException;
    public CreateApplicationResponse withInvalidApplicationNameException(Object invalidApplicationNameException) {
        this.invalidApplicationNameException = invalidApplicationNameException;
        return this;
    }
    public Object invalidComputePlatformException;
    public CreateApplicationResponse withInvalidComputePlatformException(Object invalidComputePlatformException) {
        this.invalidComputePlatformException = invalidComputePlatformException;
        return this;
    }
    public Object invalidTagsToAddException;
    public CreateApplicationResponse withInvalidTagsToAddException(Object invalidTagsToAddException) {
        this.invalidTagsToAddException = invalidTagsToAddException;
        return this;
    }
    public Long statusCode;
    public CreateApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}