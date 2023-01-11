package openapisdk.models.operations;



public class AddTagsResponse {
    public openapisdk.models.shared.AddTagsOutput addTagsOutput;
    public AddTagsResponse withAddTagsOutput(openapisdk.models.shared.AddTagsOutput addTagsOutput) {
        this.addTagsOutput = addTagsOutput;
        return this;
    }
    public String contentType;
    public AddTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public AddTagsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidInputException;
    public AddTagsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object invalidTagException;
    public AddTagsResponse withInvalidTagException(Object invalidTagException) {
        this.invalidTagException = invalidTagException;
        return this;
    }
    public Object resourceNotFoundException;
    public AddTagsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AddTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tagLimitExceededException;
    public AddTagsResponse withTagLimitExceededException(Object tagLimitExceededException) {
        this.tagLimitExceededException = tagLimitExceededException;
        return this;
    }
}