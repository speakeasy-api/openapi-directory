package openapisdk.models.operations;



public class ListHapgsResponse {
    public Object cloudHsmInternalException;
    public ListHapgsResponse withCloudHsmInternalException(Object cloudHsmInternalException) {
        this.cloudHsmInternalException = cloudHsmInternalException;
        return this;
    }
    public Object cloudHsmServiceException;
    public ListHapgsResponse withCloudHsmServiceException(Object cloudHsmServiceException) {
        this.cloudHsmServiceException = cloudHsmServiceException;
        return this;
    }
    public String contentType;
    public ListHapgsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidRequestException;
    public ListHapgsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListHapgsResponse listHapgsResponse;
    public ListHapgsResponse withListHapgsResponse(openapisdk.models.shared.ListHapgsResponse listHapgsResponse) {
        this.listHapgsResponse = listHapgsResponse;
        return this;
    }
    public Long statusCode;
    public ListHapgsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}