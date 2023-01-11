package openapisdk.models.operations;



public class StopIcd10CmInferenceJobResponse {
    public String contentType;
    public StopIcd10CmInferenceJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StopIcd10CmInferenceJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public StopIcd10CmInferenceJobResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public StopIcd10CmInferenceJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public StopIcd10CmInferenceJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StopIcd10CmInferenceJobResponse stopIcd10CMInferenceJobResponse;
    public StopIcd10CmInferenceJobResponse withStopIcd10CmInferenceJobResponse(openapisdk.models.shared.StopIcd10CmInferenceJobResponse stopIcd10CMInferenceJobResponse) {
        this.stopIcd10CMInferenceJobResponse = stopIcd10CMInferenceJobResponse;
        return this;
    }
}