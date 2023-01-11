package openapisdk.models.operations;



public class EvaluateExpressionResponse {
    public String contentType;
    public EvaluateExpressionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EvaluateExpressionOutput evaluateExpressionOutput;
    public EvaluateExpressionResponse withEvaluateExpressionOutput(openapisdk.models.shared.EvaluateExpressionOutput evaluateExpressionOutput) {
        this.evaluateExpressionOutput = evaluateExpressionOutput;
        return this;
    }
    public Object internalServiceError;
    public EvaluateExpressionResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidRequestException;
    public EvaluateExpressionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object pipelineDeletedException;
    public EvaluateExpressionResponse withPipelineDeletedException(Object pipelineDeletedException) {
        this.pipelineDeletedException = pipelineDeletedException;
        return this;
    }
    public Object pipelineNotFoundException;
    public EvaluateExpressionResponse withPipelineNotFoundException(Object pipelineNotFoundException) {
        this.pipelineNotFoundException = pipelineNotFoundException;
        return this;
    }
    public Long statusCode;
    public EvaluateExpressionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object taskNotFoundException;
    public EvaluateExpressionResponse withTaskNotFoundException(Object taskNotFoundException) {
        this.taskNotFoundException = taskNotFoundException;
        return this;
    }
}