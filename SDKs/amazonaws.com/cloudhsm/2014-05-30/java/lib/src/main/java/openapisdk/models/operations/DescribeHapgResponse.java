package openapisdk.models.operations;



public class DescribeHapgResponse {
    public Object cloudHsmInternalException;
    public DescribeHapgResponse withCloudHsmInternalException(Object cloudHsmInternalException) {
        this.cloudHsmInternalException = cloudHsmInternalException;
        return this;
    }
    public Object cloudHsmServiceException;
    public DescribeHapgResponse withCloudHsmServiceException(Object cloudHsmServiceException) {
        this.cloudHsmServiceException = cloudHsmServiceException;
        return this;
    }
    public String contentType;
    public DescribeHapgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeHapgResponse describeHapgResponse;
    public DescribeHapgResponse withDescribeHapgResponse(openapisdk.models.shared.DescribeHapgResponse describeHapgResponse) {
        this.describeHapgResponse = describeHapgResponse;
        return this;
    }
    public Object invalidRequestException;
    public DescribeHapgResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public DescribeHapgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}