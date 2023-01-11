package openapisdk.models.operations;



public class DescribeLunaClientResponse {
    public Object cloudHsmInternalException;
    public DescribeLunaClientResponse withCloudHsmInternalException(Object cloudHsmInternalException) {
        this.cloudHsmInternalException = cloudHsmInternalException;
        return this;
    }
    public Object cloudHsmServiceException;
    public DescribeLunaClientResponse withCloudHsmServiceException(Object cloudHsmServiceException) {
        this.cloudHsmServiceException = cloudHsmServiceException;
        return this;
    }
    public String contentType;
    public DescribeLunaClientResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeLunaClientResponse describeLunaClientResponse;
    public DescribeLunaClientResponse withDescribeLunaClientResponse(openapisdk.models.shared.DescribeLunaClientResponse describeLunaClientResponse) {
        this.describeLunaClientResponse = describeLunaClientResponse;
        return this;
    }
    public Object invalidRequestException;
    public DescribeLunaClientResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public DescribeLunaClientResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}