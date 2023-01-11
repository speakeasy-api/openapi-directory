package openapisdk.models.operations;



public class DescribeGeofenceCollectionResponse {
    public Object accessDeniedException;
    public DescribeGeofenceCollectionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeGeofenceCollectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeGeofenceCollectionResponse describeGeofenceCollectionResponse;
    public DescribeGeofenceCollectionResponse withDescribeGeofenceCollectionResponse(openapisdk.models.shared.DescribeGeofenceCollectionResponse describeGeofenceCollectionResponse) {
        this.describeGeofenceCollectionResponse = describeGeofenceCollectionResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeGeofenceCollectionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeGeofenceCollectionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeGeofenceCollectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeGeofenceCollectionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeGeofenceCollectionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}