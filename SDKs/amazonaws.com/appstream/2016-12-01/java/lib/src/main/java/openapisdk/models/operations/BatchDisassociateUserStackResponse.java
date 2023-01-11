package openapisdk.models.operations;



public class BatchDisassociateUserStackResponse {
    public openapisdk.models.shared.BatchDisassociateUserStackResult batchDisassociateUserStackResult;
    public BatchDisassociateUserStackResponse withBatchDisassociateUserStackResult(openapisdk.models.shared.BatchDisassociateUserStackResult batchDisassociateUserStackResult) {
        this.batchDisassociateUserStackResult = batchDisassociateUserStackResult;
        return this;
    }
    public String contentType;
    public BatchDisassociateUserStackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterCombinationException;
    public BatchDisassociateUserStackResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Object operationNotPermittedException;
    public BatchDisassociateUserStackResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Long statusCode;
    public BatchDisassociateUserStackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}