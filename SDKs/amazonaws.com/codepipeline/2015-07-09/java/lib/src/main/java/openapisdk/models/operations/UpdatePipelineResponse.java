package openapisdk.models.operations;



public class UpdatePipelineResponse {
    public String contentType;
    public UpdatePipelineResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidActionDeclarationException;
    public UpdatePipelineResponse withInvalidActionDeclarationException(Object invalidActionDeclarationException) {
        this.invalidActionDeclarationException = invalidActionDeclarationException;
        return this;
    }
    public Object invalidBlockerDeclarationException;
    public UpdatePipelineResponse withInvalidBlockerDeclarationException(Object invalidBlockerDeclarationException) {
        this.invalidBlockerDeclarationException = invalidBlockerDeclarationException;
        return this;
    }
    public Object invalidStageDeclarationException;
    public UpdatePipelineResponse withInvalidStageDeclarationException(Object invalidStageDeclarationException) {
        this.invalidStageDeclarationException = invalidStageDeclarationException;
        return this;
    }
    public Object invalidStructureException;
    public UpdatePipelineResponse withInvalidStructureException(Object invalidStructureException) {
        this.invalidStructureException = invalidStructureException;
        return this;
    }
    public Object limitExceededException;
    public UpdatePipelineResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public UpdatePipelineResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdatePipelineOutput updatePipelineOutput;
    public UpdatePipelineResponse withUpdatePipelineOutput(openapisdk.models.shared.UpdatePipelineOutput updatePipelineOutput) {
        this.updatePipelineOutput = updatePipelineOutput;
        return this;
    }
    public Object validationException;
    public UpdatePipelineResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}