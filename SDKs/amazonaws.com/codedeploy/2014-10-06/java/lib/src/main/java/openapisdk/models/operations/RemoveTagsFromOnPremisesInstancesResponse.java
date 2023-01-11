package openapisdk.models.operations;



public class RemoveTagsFromOnPremisesInstancesResponse {
    public String contentType;
    public RemoveTagsFromOnPremisesInstancesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object instanceLimitExceededException;
    public RemoveTagsFromOnPremisesInstancesResponse withInstanceLimitExceededException(Object instanceLimitExceededException) {
        this.instanceLimitExceededException = instanceLimitExceededException;
        return this;
    }
    public Object instanceNameRequiredException;
    public RemoveTagsFromOnPremisesInstancesResponse withInstanceNameRequiredException(Object instanceNameRequiredException) {
        this.instanceNameRequiredException = instanceNameRequiredException;
        return this;
    }
    public Object instanceNotRegisteredException;
    public RemoveTagsFromOnPremisesInstancesResponse withInstanceNotRegisteredException(Object instanceNotRegisteredException) {
        this.instanceNotRegisteredException = instanceNotRegisteredException;
        return this;
    }
    public Object invalidInstanceNameException;
    public RemoveTagsFromOnPremisesInstancesResponse withInvalidInstanceNameException(Object invalidInstanceNameException) {
        this.invalidInstanceNameException = invalidInstanceNameException;
        return this;
    }
    public Object invalidTagException;
    public RemoveTagsFromOnPremisesInstancesResponse withInvalidTagException(Object invalidTagException) {
        this.invalidTagException = invalidTagException;
        return this;
    }
    public Long statusCode;
    public RemoveTagsFromOnPremisesInstancesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tagLimitExceededException;
    public RemoveTagsFromOnPremisesInstancesResponse withTagLimitExceededException(Object tagLimitExceededException) {
        this.tagLimitExceededException = tagLimitExceededException;
        return this;
    }
    public Object tagRequiredException;
    public RemoveTagsFromOnPremisesInstancesResponse withTagRequiredException(Object tagRequiredException) {
        this.tagRequiredException = tagRequiredException;
        return this;
    }
}