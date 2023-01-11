package openapisdk.models.operations;



public class DeleteOutpostResponse {
    public Object accessDeniedException;
    public DeleteOutpostResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public DeleteOutpostResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeleteOutpostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteOutpostOutput;
    public DeleteOutpostResponse withDeleteOutpostOutput(java.util.Map<String, Object> deleteOutpostOutput) {
        this.deleteOutpostOutput = deleteOutpostOutput;
        return this;
    }
    public Object internalServerException;
    public DeleteOutpostResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object notFoundException;
    public DeleteOutpostResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteOutpostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeleteOutpostResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}