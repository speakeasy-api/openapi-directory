package openapisdk.models.operations;



public class DeregisterOnPremisesInstanceResponse {
    public String contentType;
    public DeregisterOnPremisesInstanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object instanceNameRequiredException;
    public DeregisterOnPremisesInstanceResponse withInstanceNameRequiredException(Object instanceNameRequiredException) {
        this.instanceNameRequiredException = instanceNameRequiredException;
        return this;
    }
    public Object invalidInstanceNameException;
    public DeregisterOnPremisesInstanceResponse withInvalidInstanceNameException(Object invalidInstanceNameException) {
        this.invalidInstanceNameException = invalidInstanceNameException;
        return this;
    }
    public Long statusCode;
    public DeregisterOnPremisesInstanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}