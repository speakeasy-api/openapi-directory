package openapisdk.models.operations;



public class PutJobFailureResultResponse {
    public String contentType;
    public PutJobFailureResultResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidJobStateException;
    public PutJobFailureResultResponse withInvalidJobStateException(Object invalidJobStateException) {
        this.invalidJobStateException = invalidJobStateException;
        return this;
    }
    public Object jobNotFoundException;
    public PutJobFailureResultResponse withJobNotFoundException(Object jobNotFoundException) {
        this.jobNotFoundException = jobNotFoundException;
        return this;
    }
    public Long statusCode;
    public PutJobFailureResultResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public PutJobFailureResultResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}