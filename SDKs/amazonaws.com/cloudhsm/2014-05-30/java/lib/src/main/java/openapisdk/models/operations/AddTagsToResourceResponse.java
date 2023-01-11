package openapisdk.models.operations;



public class AddTagsToResourceResponse {
    public openapisdk.models.shared.AddTagsToResourceResponse addTagsToResourceResponse;
    public AddTagsToResourceResponse withAddTagsToResourceResponse(openapisdk.models.shared.AddTagsToResourceResponse addTagsToResourceResponse) {
        this.addTagsToResourceResponse = addTagsToResourceResponse;
        return this;
    }
    public Object cloudHsmInternalException;
    public AddTagsToResourceResponse withCloudHsmInternalException(Object cloudHsmInternalException) {
        this.cloudHsmInternalException = cloudHsmInternalException;
        return this;
    }
    public Object cloudHsmServiceException;
    public AddTagsToResourceResponse withCloudHsmServiceException(Object cloudHsmServiceException) {
        this.cloudHsmServiceException = cloudHsmServiceException;
        return this;
    }
    public String contentType;
    public AddTagsToResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidRequestException;
    public AddTagsToResourceResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public AddTagsToResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}