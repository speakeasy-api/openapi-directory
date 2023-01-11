package openapisdk.models.operations;



public class CreatePipelineResponse {
    public Object concurrentModificationException;
    public CreatePipelineResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public CreatePipelineResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreatePipelineOutput createPipelineOutput;
    public CreatePipelineResponse withCreatePipelineOutput(openapisdk.models.shared.CreatePipelineOutput createPipelineOutput) {
        this.createPipelineOutput = createPipelineOutput;
        return this;
    }
    public Object invalidActionDeclarationException;
    public CreatePipelineResponse withInvalidActionDeclarationException(Object invalidActionDeclarationException) {
        this.invalidActionDeclarationException = invalidActionDeclarationException;
        return this;
    }
    public Object invalidBlockerDeclarationException;
    public CreatePipelineResponse withInvalidBlockerDeclarationException(Object invalidBlockerDeclarationException) {
        this.invalidBlockerDeclarationException = invalidBlockerDeclarationException;
        return this;
    }
    public Object invalidStageDeclarationException;
    public CreatePipelineResponse withInvalidStageDeclarationException(Object invalidStageDeclarationException) {
        this.invalidStageDeclarationException = invalidStageDeclarationException;
        return this;
    }
    public Object invalidStructureException;
    public CreatePipelineResponse withInvalidStructureException(Object invalidStructureException) {
        this.invalidStructureException = invalidStructureException;
        return this;
    }
    public Object invalidTagsException;
    public CreatePipelineResponse withInvalidTagsException(Object invalidTagsException) {
        this.invalidTagsException = invalidTagsException;
        return this;
    }
    public Object limitExceededException;
    public CreatePipelineResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object pipelineNameInUseException;
    public CreatePipelineResponse withPipelineNameInUseException(Object pipelineNameInUseException) {
        this.pipelineNameInUseException = pipelineNameInUseException;
        return this;
    }
    public Long statusCode;
    public CreatePipelineResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyTagsException;
    public CreatePipelineResponse withTooManyTagsException(Object tooManyTagsException) {
        this.tooManyTagsException = tooManyTagsException;
        return this;
    }
    public Object validationException;
    public CreatePipelineResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}