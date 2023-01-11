package openapisdk.models.operations;



public class DeleteGraphqlApiResponse {
    public Object accessDeniedException;
    public DeleteGraphqlApiResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object badRequestException;
    public DeleteGraphqlApiResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object concurrentModificationException;
    public DeleteGraphqlApiResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public DeleteGraphqlApiResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteGraphqlApiResponse;
    public DeleteGraphqlApiResponse withDeleteGraphqlApiResponse(java.util.Map<String, Object> deleteGraphqlApiResponse) {
        this.deleteGraphqlApiResponse = deleteGraphqlApiResponse;
        return this;
    }
    public Object internalFailureException;
    public DeleteGraphqlApiResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object notFoundException;
    public DeleteGraphqlApiResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteGraphqlApiResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public DeleteGraphqlApiResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}