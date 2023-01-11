package openapisdk.models.operations;



public class DeleteTagsResponse {
    public String contentType;
    public DeleteTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteTagsOutput deleteTagsOutput;
    public DeleteTagsResponse withDeleteTagsOutput(openapisdk.models.shared.DeleteTagsOutput deleteTagsOutput) {
        this.deleteTagsOutput = deleteTagsOutput;
        return this;
    }
    public Object internalServerException;
    public DeleteTagsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidInputException;
    public DeleteTagsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object invalidTagException;
    public DeleteTagsResponse withInvalidTagException(Object invalidTagException) {
        this.invalidTagException = invalidTagException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteTagsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}