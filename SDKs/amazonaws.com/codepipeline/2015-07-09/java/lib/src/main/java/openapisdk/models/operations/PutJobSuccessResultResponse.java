package openapisdk.models.operations;



public class PutJobSuccessResultResponse {
    public String contentType;
    public PutJobSuccessResultResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidJobStateException;
    public PutJobSuccessResultResponse withInvalidJobStateException(Object invalidJobStateException) {
        this.invalidJobStateException = invalidJobStateException;
        return this;
    }
    public Object jobNotFoundException;
    public PutJobSuccessResultResponse withJobNotFoundException(Object jobNotFoundException) {
        this.jobNotFoundException = jobNotFoundException;
        return this;
    }
    public Object outputVariablesSizeExceededException;
    public PutJobSuccessResultResponse withOutputVariablesSizeExceededException(Object outputVariablesSizeExceededException) {
        this.outputVariablesSizeExceededException = outputVariablesSizeExceededException;
        return this;
    }
    public Long statusCode;
    public PutJobSuccessResultResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public PutJobSuccessResultResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}