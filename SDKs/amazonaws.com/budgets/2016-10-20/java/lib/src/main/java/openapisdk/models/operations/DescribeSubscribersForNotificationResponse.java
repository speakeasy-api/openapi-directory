package openapisdk.models.operations;



public class DescribeSubscribersForNotificationResponse {
    public Object accessDeniedException;
    public DescribeSubscribersForNotificationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeSubscribersForNotificationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeSubscribersForNotificationResponse describeSubscribersForNotificationResponse;
    public DescribeSubscribersForNotificationResponse withDescribeSubscribersForNotificationResponse(openapisdk.models.shared.DescribeSubscribersForNotificationResponse describeSubscribersForNotificationResponse) {
        this.describeSubscribersForNotificationResponse = describeSubscribersForNotificationResponse;
        return this;
    }
    public Object expiredNextTokenException;
    public DescribeSubscribersForNotificationResponse withExpiredNextTokenException(Object expiredNextTokenException) {
        this.expiredNextTokenException = expiredNextTokenException;
        return this;
    }
    public Object internalErrorException;
    public DescribeSubscribersForNotificationResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidNextTokenException;
    public DescribeSubscribersForNotificationResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeSubscribersForNotificationResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notFoundException;
    public DescribeSubscribersForNotificationResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeSubscribersForNotificationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}