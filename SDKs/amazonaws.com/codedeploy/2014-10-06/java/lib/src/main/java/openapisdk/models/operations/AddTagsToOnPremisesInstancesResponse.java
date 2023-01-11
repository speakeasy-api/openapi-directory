package openapisdk.models.operations;



public class AddTagsToOnPremisesInstancesResponse {
    public String contentType;
    public AddTagsToOnPremisesInstancesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object instanceLimitExceededException;
    public AddTagsToOnPremisesInstancesResponse withInstanceLimitExceededException(Object instanceLimitExceededException) {
        this.instanceLimitExceededException = instanceLimitExceededException;
        return this;
    }
    public Object instanceNameRequiredException;
    public AddTagsToOnPremisesInstancesResponse withInstanceNameRequiredException(Object instanceNameRequiredException) {
        this.instanceNameRequiredException = instanceNameRequiredException;
        return this;
    }
    public Object instanceNotRegisteredException;
    public AddTagsToOnPremisesInstancesResponse withInstanceNotRegisteredException(Object instanceNotRegisteredException) {
        this.instanceNotRegisteredException = instanceNotRegisteredException;
        return this;
    }
    public Object invalidInstanceNameException;
    public AddTagsToOnPremisesInstancesResponse withInvalidInstanceNameException(Object invalidInstanceNameException) {
        this.invalidInstanceNameException = invalidInstanceNameException;
        return this;
    }
    public Object invalidTagException;
    public AddTagsToOnPremisesInstancesResponse withInvalidTagException(Object invalidTagException) {
        this.invalidTagException = invalidTagException;
        return this;
    }
    public Long statusCode;
    public AddTagsToOnPremisesInstancesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tagLimitExceededException;
    public AddTagsToOnPremisesInstancesResponse withTagLimitExceededException(Object tagLimitExceededException) {
        this.tagLimitExceededException = tagLimitExceededException;
        return this;
    }
    public Object tagRequiredException;
    public AddTagsToOnPremisesInstancesResponse withTagRequiredException(Object tagRequiredException) {
        this.tagRequiredException = tagRequiredException;
        return this;
    }
}