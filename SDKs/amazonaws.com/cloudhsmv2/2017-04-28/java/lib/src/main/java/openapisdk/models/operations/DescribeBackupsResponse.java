package openapisdk.models.operations;



public class DescribeBackupsResponse {
    public Object cloudHsmAccessDeniedException;
    public DescribeBackupsResponse withCloudHsmAccessDeniedException(Object cloudHsmAccessDeniedException) {
        this.cloudHsmAccessDeniedException = cloudHsmAccessDeniedException;
        return this;
    }
    public Object cloudHsmInternalFailureException;
    public DescribeBackupsResponse withCloudHsmInternalFailureException(Object cloudHsmInternalFailureException) {
        this.cloudHsmInternalFailureException = cloudHsmInternalFailureException;
        return this;
    }
    public Object cloudHsmInvalidRequestException;
    public DescribeBackupsResponse withCloudHsmInvalidRequestException(Object cloudHsmInvalidRequestException) {
        this.cloudHsmInvalidRequestException = cloudHsmInvalidRequestException;
        return this;
    }
    public Object cloudHsmResourceNotFoundException;
    public DescribeBackupsResponse withCloudHsmResourceNotFoundException(Object cloudHsmResourceNotFoundException) {
        this.cloudHsmResourceNotFoundException = cloudHsmResourceNotFoundException;
        return this;
    }
    public Object cloudHsmServiceException;
    public DescribeBackupsResponse withCloudHsmServiceException(Object cloudHsmServiceException) {
        this.cloudHsmServiceException = cloudHsmServiceException;
        return this;
    }
    public Object cloudHsmTagException;
    public DescribeBackupsResponse withCloudHsmTagException(Object cloudHsmTagException) {
        this.cloudHsmTagException = cloudHsmTagException;
        return this;
    }
    public String contentType;
    public DescribeBackupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeBackupsResponse describeBackupsResponse;
    public DescribeBackupsResponse withDescribeBackupsResponse(openapisdk.models.shared.DescribeBackupsResponse describeBackupsResponse) {
        this.describeBackupsResponse = describeBackupsResponse;
        return this;
    }
    public Long statusCode;
    public DescribeBackupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}