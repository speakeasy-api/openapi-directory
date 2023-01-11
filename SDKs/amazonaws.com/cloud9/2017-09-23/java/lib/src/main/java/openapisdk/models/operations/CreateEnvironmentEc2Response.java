package openapisdk.models.operations;



public class CreateEnvironmentEc2Response {
    public Object badRequestException;
    public CreateEnvironmentEc2Response withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public CreateEnvironmentEc2Response withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateEnvironmentEc2Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateEnvironmentEc2Result createEnvironmentEc2Result;
    public CreateEnvironmentEc2Response withCreateEnvironmentEc2Result(openapisdk.models.shared.CreateEnvironmentEc2Result createEnvironmentEc2Result) {
        this.createEnvironmentEc2Result = createEnvironmentEc2Result;
        return this;
    }
    public Object forbiddenException;
    public CreateEnvironmentEc2Response withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public CreateEnvironmentEc2Response withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object limitExceededException;
    public CreateEnvironmentEc2Response withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public CreateEnvironmentEc2Response withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CreateEnvironmentEc2Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CreateEnvironmentEc2Response withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}