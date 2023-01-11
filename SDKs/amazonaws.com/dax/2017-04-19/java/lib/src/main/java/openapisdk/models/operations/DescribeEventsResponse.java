package openapisdk.models.operations;



public class DescribeEventsResponse {
    public String contentType;
    public DescribeEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeEventsResponse describeEventsResponse;
    public DescribeEventsResponse withDescribeEventsResponse(openapisdk.models.shared.DescribeEventsResponse describeEventsResponse) {
        this.describeEventsResponse = describeEventsResponse;
        return this;
    }
    public Object invalidParameterCombinationException;
    public DescribeEventsResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Object invalidParameterValueException;
    public DescribeEventsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object serviceLinkedRoleNotFoundFault;
    public DescribeEventsResponse withServiceLinkedRoleNotFoundFault(Object serviceLinkedRoleNotFoundFault) {
        this.serviceLinkedRoleNotFoundFault = serviceLinkedRoleNotFoundFault;
        return this;
    }
    public Long statusCode;
    public DescribeEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}