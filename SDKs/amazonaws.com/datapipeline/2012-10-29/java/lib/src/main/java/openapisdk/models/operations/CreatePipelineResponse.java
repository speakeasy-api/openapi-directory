package openapisdk.models.operations;



public class CreatePipelineResponse {
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
    public Object internalServiceError;
    public CreatePipelineResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidRequestException;
    public CreatePipelineResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public CreatePipelineResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}