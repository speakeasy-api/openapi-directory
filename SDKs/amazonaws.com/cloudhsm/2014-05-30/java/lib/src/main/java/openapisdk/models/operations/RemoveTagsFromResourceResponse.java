package openapisdk.models.operations;



public class RemoveTagsFromResourceResponse {
    public Object cloudHsmInternalException;
    public RemoveTagsFromResourceResponse withCloudHsmInternalException(Object cloudHsmInternalException) {
        this.cloudHsmInternalException = cloudHsmInternalException;
        return this;
    }
    public Object cloudHsmServiceException;
    public RemoveTagsFromResourceResponse withCloudHsmServiceException(Object cloudHsmServiceException) {
        this.cloudHsmServiceException = cloudHsmServiceException;
        return this;
    }
    public String contentType;
    public RemoveTagsFromResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidRequestException;
    public RemoveTagsFromResourceResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.RemoveTagsFromResourceResponse removeTagsFromResourceResponse;
    public RemoveTagsFromResourceResponse withRemoveTagsFromResourceResponse(openapisdk.models.shared.RemoveTagsFromResourceResponse removeTagsFromResourceResponse) {
        this.removeTagsFromResourceResponse = removeTagsFromResourceResponse;
        return this;
    }
    public Long statusCode;
    public RemoveTagsFromResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}