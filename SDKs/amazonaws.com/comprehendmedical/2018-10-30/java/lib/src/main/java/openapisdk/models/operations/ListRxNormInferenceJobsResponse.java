package openapisdk.models.operations;



public class ListRxNormInferenceJobsResponse {
    public String contentType;
    public ListRxNormInferenceJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListRxNormInferenceJobsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public ListRxNormInferenceJobsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListRxNormInferenceJobsResponse listRxNormInferenceJobsResponse;
    public ListRxNormInferenceJobsResponse withListRxNormInferenceJobsResponse(openapisdk.models.shared.ListRxNormInferenceJobsResponse listRxNormInferenceJobsResponse) {
        this.listRxNormInferenceJobsResponse = listRxNormInferenceJobsResponse;
        return this;
    }
    public Long statusCode;
    public ListRxNormInferenceJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListRxNormInferenceJobsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object validationException;
    public ListRxNormInferenceJobsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}