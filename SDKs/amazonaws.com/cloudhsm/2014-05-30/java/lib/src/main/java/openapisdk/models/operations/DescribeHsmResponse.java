package openapisdk.models.operations;



public class DescribeHsmResponse {
    public Object cloudHsmInternalException;
    public DescribeHsmResponse withCloudHsmInternalException(Object cloudHsmInternalException) {
        this.cloudHsmInternalException = cloudHsmInternalException;
        return this;
    }
    public Object cloudHsmServiceException;
    public DescribeHsmResponse withCloudHsmServiceException(Object cloudHsmServiceException) {
        this.cloudHsmServiceException = cloudHsmServiceException;
        return this;
    }
    public String contentType;
    public DescribeHsmResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeHsmResponse describeHsmResponse;
    public DescribeHsmResponse withDescribeHsmResponse(openapisdk.models.shared.DescribeHsmResponse describeHsmResponse) {
        this.describeHsmResponse = describeHsmResponse;
        return this;
    }
    public Object invalidRequestException;
    public DescribeHsmResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public DescribeHsmResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}