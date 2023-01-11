package openapisdk.models.operations;



public class UpdateGraphqlApiResponse {
    public Object accessDeniedException;
    public UpdateGraphqlApiResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object badRequestException;
    public UpdateGraphqlApiResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object concurrentModificationException;
    public UpdateGraphqlApiResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public UpdateGraphqlApiResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public UpdateGraphqlApiResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object notFoundException;
    public UpdateGraphqlApiResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateGraphqlApiResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public UpdateGraphqlApiResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
    public openapisdk.models.shared.UpdateGraphqlApiResponse updateGraphqlApiResponse;
    public UpdateGraphqlApiResponse withUpdateGraphqlApiResponse(openapisdk.models.shared.UpdateGraphqlApiResponse updateGraphqlApiResponse) {
        this.updateGraphqlApiResponse = updateGraphqlApiResponse;
        return this;
    }
}