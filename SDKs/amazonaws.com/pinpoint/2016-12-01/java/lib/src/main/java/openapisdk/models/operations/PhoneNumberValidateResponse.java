package openapisdk.models.operations;



public class PhoneNumberValidateResponse {
    public Object badRequestException;
    public PhoneNumberValidateResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public PhoneNumberValidateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public PhoneNumberValidateResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public PhoneNumberValidateResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object methodNotAllowedException;
    public PhoneNumberValidateResponse withMethodNotAllowedException(Object methodNotAllowedException) {
        this.methodNotAllowedException = methodNotAllowedException;
        return this;
    }
    public Object notFoundException;
    public PhoneNumberValidateResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object payloadTooLargeException;
    public PhoneNumberValidateResponse withPayloadTooLargeException(Object payloadTooLargeException) {
        this.payloadTooLargeException = payloadTooLargeException;
        return this;
    }
    public openapisdk.models.shared.PhoneNumberValidateResponse phoneNumberValidateResponse;
    public PhoneNumberValidateResponse withPhoneNumberValidateResponse(openapisdk.models.shared.PhoneNumberValidateResponse phoneNumberValidateResponse) {
        this.phoneNumberValidateResponse = phoneNumberValidateResponse;
        return this;
    }
    public Long statusCode;
    public PhoneNumberValidateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public PhoneNumberValidateResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}