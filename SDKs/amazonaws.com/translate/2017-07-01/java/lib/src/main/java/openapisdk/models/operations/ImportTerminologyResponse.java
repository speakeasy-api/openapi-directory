package openapisdk.models.operations;



public class ImportTerminologyResponse {
    public String contentType;
    public ImportTerminologyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ImportTerminologyResponse importTerminologyResponse;
    public ImportTerminologyResponse withImportTerminologyResponse(openapisdk.models.shared.ImportTerminologyResponse importTerminologyResponse) {
        this.importTerminologyResponse = importTerminologyResponse;
        return this;
    }
    public Object internalServerException;
    public ImportTerminologyResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterValueException;
    public ImportTerminologyResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object limitExceededException;
    public ImportTerminologyResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public ImportTerminologyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ImportTerminologyResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}