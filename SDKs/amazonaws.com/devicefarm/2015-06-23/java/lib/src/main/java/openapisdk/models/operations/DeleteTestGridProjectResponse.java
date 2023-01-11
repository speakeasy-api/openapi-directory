package openapisdk.models.operations;



public class DeleteTestGridProjectResponse {
    public Object argumentException;
    public DeleteTestGridProjectResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public Object cannotDeleteException;
    public DeleteTestGridProjectResponse withCannotDeleteException(Object cannotDeleteException) {
        this.cannotDeleteException = cannotDeleteException;
        return this;
    }
    public String contentType;
    public DeleteTestGridProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteTestGridProjectResult;
    public DeleteTestGridProjectResponse withDeleteTestGridProjectResult(java.util.Map<String, Object> deleteTestGridProjectResult) {
        this.deleteTestGridProjectResult = deleteTestGridProjectResult;
        return this;
    }
    public Object internalServiceException;
    public DeleteTestGridProjectResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object notFoundException;
    public DeleteTestGridProjectResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteTestGridProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}