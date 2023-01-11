package openapisdk.models.operations;



public class StartIcd10CmInferenceJobResponse {
    public String contentType;
    public StartIcd10CmInferenceJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StartIcd10CmInferenceJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public StartIcd10CmInferenceJobResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public StartIcd10CmInferenceJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.StartIcd10CmInferenceJobResponse startIcd10CMInferenceJobResponse;
    public StartIcd10CmInferenceJobResponse withStartIcd10CmInferenceJobResponse(openapisdk.models.shared.StartIcd10CmInferenceJobResponse startIcd10CMInferenceJobResponse) {
        this.startIcd10CMInferenceJobResponse = startIcd10CMInferenceJobResponse;
        return this;
    }
    public Long statusCode;
    public StartIcd10CmInferenceJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public StartIcd10CmInferenceJobResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}