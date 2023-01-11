package openapisdk.models.operations;



public class DeleteConstraintResponse {
    public String contentType;
    public DeleteConstraintResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteConstraintOutput;
    public DeleteConstraintResponse withDeleteConstraintOutput(java.util.Map<String, Object> deleteConstraintOutput) {
        this.deleteConstraintOutput = deleteConstraintOutput;
        return this;
    }
    public Object invalidParametersException;
    public DeleteConstraintResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteConstraintResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteConstraintResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}