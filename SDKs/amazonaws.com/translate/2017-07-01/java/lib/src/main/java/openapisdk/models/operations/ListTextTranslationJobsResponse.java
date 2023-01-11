package openapisdk.models.operations;



public class ListTextTranslationJobsResponse {
    public String contentType;
    public ListTextTranslationJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListTextTranslationJobsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidFilterException;
    public ListTextTranslationJobsResponse withInvalidFilterException(Object invalidFilterException) {
        this.invalidFilterException = invalidFilterException;
        return this;
    }
    public Object invalidRequestException;
    public ListTextTranslationJobsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListTextTranslationJobsResponse listTextTranslationJobsResponse;
    public ListTextTranslationJobsResponse withListTextTranslationJobsResponse(openapisdk.models.shared.ListTextTranslationJobsResponse listTextTranslationJobsResponse) {
        this.listTextTranslationJobsResponse = listTextTranslationJobsResponse;
        return this;
    }
    public Long statusCode;
    public ListTextTranslationJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListTextTranslationJobsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}