package openapisdk.models.operations;



public class ListHsmsResponse {
    public Object cloudHsmInternalException;
    public ListHsmsResponse withCloudHsmInternalException(Object cloudHsmInternalException) {
        this.cloudHsmInternalException = cloudHsmInternalException;
        return this;
    }
    public Object cloudHsmServiceException;
    public ListHsmsResponse withCloudHsmServiceException(Object cloudHsmServiceException) {
        this.cloudHsmServiceException = cloudHsmServiceException;
        return this;
    }
    public String contentType;
    public ListHsmsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidRequestException;
    public ListHsmsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListHsmsResponse listHsmsResponse;
    public ListHsmsResponse withListHsmsResponse(openapisdk.models.shared.ListHsmsResponse listHsmsResponse) {
        this.listHsmsResponse = listHsmsResponse;
        return this;
    }
    public Long statusCode;
    public ListHsmsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}