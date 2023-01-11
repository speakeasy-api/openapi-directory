package openapisdk.models.operations;



public class DescribeServiceUpdatesResponse {
    public String contentType;
    public DescribeServiceUpdatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeServiceUpdatesResponse describeServiceUpdatesResponse;
    public DescribeServiceUpdatesResponse withDescribeServiceUpdatesResponse(openapisdk.models.shared.DescribeServiceUpdatesResponse describeServiceUpdatesResponse) {
        this.describeServiceUpdatesResponse = describeServiceUpdatesResponse;
        return this;
    }
    public Object invalidParameterCombinationException;
    public DescribeServiceUpdatesResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Object invalidParameterValueException;
    public DescribeServiceUpdatesResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Long statusCode;
    public DescribeServiceUpdatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}