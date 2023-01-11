package openapisdk.models.operations;



public class RunPipelineActivityResponse {
    public String contentType;
    public RunPipelineActivityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public RunPipelineActivityResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public RunPipelineActivityResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.RunPipelineActivityResponse runPipelineActivityResponse;
    public RunPipelineActivityResponse withRunPipelineActivityResponse(openapisdk.models.shared.RunPipelineActivityResponse runPipelineActivityResponse) {
        this.runPipelineActivityResponse = runPipelineActivityResponse;
        return this;
    }
    public Object serviceUnavailableException;
    public RunPipelineActivityResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public RunPipelineActivityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public RunPipelineActivityResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}