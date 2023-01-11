package openapisdk.models.operations;



public class BatchAssociateUserStackResponse {
    public openapisdk.models.shared.BatchAssociateUserStackResult batchAssociateUserStackResult;
    public BatchAssociateUserStackResponse withBatchAssociateUserStackResult(openapisdk.models.shared.BatchAssociateUserStackResult batchAssociateUserStackResult) {
        this.batchAssociateUserStackResult = batchAssociateUserStackResult;
        return this;
    }
    public String contentType;
    public BatchAssociateUserStackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterCombinationException;
    public BatchAssociateUserStackResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Object operationNotPermittedException;
    public BatchAssociateUserStackResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Long statusCode;
    public BatchAssociateUserStackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}