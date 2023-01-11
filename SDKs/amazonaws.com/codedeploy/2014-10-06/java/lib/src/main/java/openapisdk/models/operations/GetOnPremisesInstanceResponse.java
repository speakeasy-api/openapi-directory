package openapisdk.models.operations;



public class GetOnPremisesInstanceResponse {
    public String contentType;
    public GetOnPremisesInstanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetOnPremisesInstanceOutput getOnPremisesInstanceOutput;
    public GetOnPremisesInstanceResponse withGetOnPremisesInstanceOutput(openapisdk.models.shared.GetOnPremisesInstanceOutput getOnPremisesInstanceOutput) {
        this.getOnPremisesInstanceOutput = getOnPremisesInstanceOutput;
        return this;
    }
    public Object instanceNameRequiredException;
    public GetOnPremisesInstanceResponse withInstanceNameRequiredException(Object instanceNameRequiredException) {
        this.instanceNameRequiredException = instanceNameRequiredException;
        return this;
    }
    public Object instanceNotRegisteredException;
    public GetOnPremisesInstanceResponse withInstanceNotRegisteredException(Object instanceNotRegisteredException) {
        this.instanceNotRegisteredException = instanceNotRegisteredException;
        return this;
    }
    public Object invalidInstanceNameException;
    public GetOnPremisesInstanceResponse withInvalidInstanceNameException(Object invalidInstanceNameException) {
        this.invalidInstanceNameException = invalidInstanceNameException;
        return this;
    }
    public Long statusCode;
    public GetOnPremisesInstanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}