package openapisdk.models.operations;



public class ListIcd10CmInferenceJobsResponse {
    public String contentType;
    public ListIcd10CmInferenceJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListIcd10CmInferenceJobsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public ListIcd10CmInferenceJobsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListIcd10CmInferenceJobsResponse listIcd10CMInferenceJobsResponse;
    public ListIcd10CmInferenceJobsResponse withListIcd10CmInferenceJobsResponse(openapisdk.models.shared.ListIcd10CmInferenceJobsResponse listIcd10CMInferenceJobsResponse) {
        this.listIcd10CMInferenceJobsResponse = listIcd10CMInferenceJobsResponse;
        return this;
    }
    public Long statusCode;
    public ListIcd10CmInferenceJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListIcd10CmInferenceJobsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object validationException;
    public ListIcd10CmInferenceJobsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}