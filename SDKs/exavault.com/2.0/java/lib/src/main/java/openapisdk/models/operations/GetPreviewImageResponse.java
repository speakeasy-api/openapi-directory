package openapisdk.models.operations;



public class GetPreviewImageResponse {
    public String contentType;
    public GetPreviewImageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PreviewFileResponse previewFileResponse;
    public GetPreviewImageResponse withPreviewFileResponse(openapisdk.models.shared.PreviewFileResponse previewFileResponse) {
        this.previewFileResponse = previewFileResponse;
        return this;
    }
    public Long statusCode;
    public GetPreviewImageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}