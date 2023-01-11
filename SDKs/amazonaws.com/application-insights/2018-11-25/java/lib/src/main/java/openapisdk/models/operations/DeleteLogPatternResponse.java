package openapisdk.models.operations;



public class DeleteLogPatternResponse {
    public Object badRequestException;
    public DeleteLogPatternResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DeleteLogPatternResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteLogPatternResponse;
    public DeleteLogPatternResponse withDeleteLogPatternResponse(java.util.Map<String, Object> deleteLogPatternResponse) {
        this.deleteLogPatternResponse = deleteLogPatternResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteLogPatternResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteLogPatternResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteLogPatternResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeleteLogPatternResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}