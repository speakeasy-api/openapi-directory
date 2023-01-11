package openapisdk.models.operations;



public class DescribeClustersResponse {
    public Object cloudHsmAccessDeniedException;
    public DescribeClustersResponse withCloudHsmAccessDeniedException(Object cloudHsmAccessDeniedException) {
        this.cloudHsmAccessDeniedException = cloudHsmAccessDeniedException;
        return this;
    }
    public Object cloudHsmInternalFailureException;
    public DescribeClustersResponse withCloudHsmInternalFailureException(Object cloudHsmInternalFailureException) {
        this.cloudHsmInternalFailureException = cloudHsmInternalFailureException;
        return this;
    }
    public Object cloudHsmInvalidRequestException;
    public DescribeClustersResponse withCloudHsmInvalidRequestException(Object cloudHsmInvalidRequestException) {
        this.cloudHsmInvalidRequestException = cloudHsmInvalidRequestException;
        return this;
    }
    public Object cloudHsmServiceException;
    public DescribeClustersResponse withCloudHsmServiceException(Object cloudHsmServiceException) {
        this.cloudHsmServiceException = cloudHsmServiceException;
        return this;
    }
    public Object cloudHsmTagException;
    public DescribeClustersResponse withCloudHsmTagException(Object cloudHsmTagException) {
        this.cloudHsmTagException = cloudHsmTagException;
        return this;
    }
    public String contentType;
    public DescribeClustersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeClustersResponse describeClustersResponse;
    public DescribeClustersResponse withDescribeClustersResponse(openapisdk.models.shared.DescribeClustersResponse describeClustersResponse) {
        this.describeClustersResponse = describeClustersResponse;
        return this;
    }
    public Long statusCode;
    public DescribeClustersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}