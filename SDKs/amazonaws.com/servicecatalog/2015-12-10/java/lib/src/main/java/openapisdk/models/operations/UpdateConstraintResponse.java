package openapisdk.models.operations;



public class UpdateConstraintResponse {
    public String contentType;
    public UpdateConstraintResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParametersException;
    public UpdateConstraintResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateConstraintResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateConstraintResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateConstraintOutput updateConstraintOutput;
    public UpdateConstraintResponse withUpdateConstraintOutput(openapisdk.models.shared.UpdateConstraintOutput updateConstraintOutput) {
        this.updateConstraintOutput = updateConstraintOutput;
        return this;
    }
}