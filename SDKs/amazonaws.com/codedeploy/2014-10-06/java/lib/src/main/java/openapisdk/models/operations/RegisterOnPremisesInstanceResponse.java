package openapisdk.models.operations;



public class RegisterOnPremisesInstanceResponse {
    public String contentType;
    public RegisterOnPremisesInstanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object iamArnRequiredException;
    public RegisterOnPremisesInstanceResponse withIamArnRequiredException(Object iamArnRequiredException) {
        this.iamArnRequiredException = iamArnRequiredException;
        return this;
    }
    public Object iamSessionArnAlreadyRegisteredException;
    public RegisterOnPremisesInstanceResponse withIamSessionArnAlreadyRegisteredException(Object iamSessionArnAlreadyRegisteredException) {
        this.iamSessionArnAlreadyRegisteredException = iamSessionArnAlreadyRegisteredException;
        return this;
    }
    public Object iamUserArnAlreadyRegisteredException;
    public RegisterOnPremisesInstanceResponse withIamUserArnAlreadyRegisteredException(Object iamUserArnAlreadyRegisteredException) {
        this.iamUserArnAlreadyRegisteredException = iamUserArnAlreadyRegisteredException;
        return this;
    }
    public Object iamUserArnRequiredException;
    public RegisterOnPremisesInstanceResponse withIamUserArnRequiredException(Object iamUserArnRequiredException) {
        this.iamUserArnRequiredException = iamUserArnRequiredException;
        return this;
    }
    public Object instanceNameAlreadyRegisteredException;
    public RegisterOnPremisesInstanceResponse withInstanceNameAlreadyRegisteredException(Object instanceNameAlreadyRegisteredException) {
        this.instanceNameAlreadyRegisteredException = instanceNameAlreadyRegisteredException;
        return this;
    }
    public Object instanceNameRequiredException;
    public RegisterOnPremisesInstanceResponse withInstanceNameRequiredException(Object instanceNameRequiredException) {
        this.instanceNameRequiredException = instanceNameRequiredException;
        return this;
    }
    public Object invalidIamSessionArnException;
    public RegisterOnPremisesInstanceResponse withInvalidIamSessionArnException(Object invalidIamSessionArnException) {
        this.invalidIamSessionArnException = invalidIamSessionArnException;
        return this;
    }
    public Object invalidIamUserArnException;
    public RegisterOnPremisesInstanceResponse withInvalidIamUserArnException(Object invalidIamUserArnException) {
        this.invalidIamUserArnException = invalidIamUserArnException;
        return this;
    }
    public Object invalidInstanceNameException;
    public RegisterOnPremisesInstanceResponse withInvalidInstanceNameException(Object invalidInstanceNameException) {
        this.invalidInstanceNameException = invalidInstanceNameException;
        return this;
    }
    public Object multipleIamArnsProvidedException;
    public RegisterOnPremisesInstanceResponse withMultipleIamArnsProvidedException(Object multipleIamArnsProvidedException) {
        this.multipleIamArnsProvidedException = multipleIamArnsProvidedException;
        return this;
    }
    public Long statusCode;
    public RegisterOnPremisesInstanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}