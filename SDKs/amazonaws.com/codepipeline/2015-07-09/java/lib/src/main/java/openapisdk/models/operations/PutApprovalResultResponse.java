package openapisdk.models.operations;



public class PutApprovalResultResponse {
    public Object actionNotFoundException;
    public PutApprovalResultResponse withActionNotFoundException(Object actionNotFoundException) {
        this.actionNotFoundException = actionNotFoundException;
        return this;
    }
    public Object approvalAlreadyCompletedException;
    public PutApprovalResultResponse withApprovalAlreadyCompletedException(Object approvalAlreadyCompletedException) {
        this.approvalAlreadyCompletedException = approvalAlreadyCompletedException;
        return this;
    }
    public String contentType;
    public PutApprovalResultResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidApprovalTokenException;
    public PutApprovalResultResponse withInvalidApprovalTokenException(Object invalidApprovalTokenException) {
        this.invalidApprovalTokenException = invalidApprovalTokenException;
        return this;
    }
    public Object pipelineNotFoundException;
    public PutApprovalResultResponse withPipelineNotFoundException(Object pipelineNotFoundException) {
        this.pipelineNotFoundException = pipelineNotFoundException;
        return this;
    }
    public openapisdk.models.shared.PutApprovalResultOutput putApprovalResultOutput;
    public PutApprovalResultResponse withPutApprovalResultOutput(openapisdk.models.shared.PutApprovalResultOutput putApprovalResultOutput) {
        this.putApprovalResultOutput = putApprovalResultOutput;
        return this;
    }
    public Object stageNotFoundException;
    public PutApprovalResultResponse withStageNotFoundException(Object stageNotFoundException) {
        this.stageNotFoundException = stageNotFoundException;
        return this;
    }
    public Long statusCode;
    public PutApprovalResultResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public PutApprovalResultResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}