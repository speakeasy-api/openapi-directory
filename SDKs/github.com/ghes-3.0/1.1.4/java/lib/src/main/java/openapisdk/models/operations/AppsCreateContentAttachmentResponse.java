package openapisdk.models.operations;



public class AppsCreateContentAttachmentResponse {
    public String contentType;
    public AppsCreateContentAttachmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AppsCreateContentAttachmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AppsCreateContentAttachment415ApplicationJson appsCreateContentAttachment415ApplicationJSONObject;
    public AppsCreateContentAttachmentResponse withAppsCreateContentAttachment415ApplicationJsonObject(AppsCreateContentAttachment415ApplicationJson appsCreateContentAttachment415ApplicationJSONObject) {
        this.appsCreateContentAttachment415ApplicationJSONObject = appsCreateContentAttachment415ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public AppsCreateContentAttachmentResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.ContentReferenceAttachment contentReferenceAttachment;
    public AppsCreateContentAttachmentResponse withContentReferenceAttachment(openapisdk.models.shared.ContentReferenceAttachment contentReferenceAttachment) {
        this.contentReferenceAttachment = contentReferenceAttachment;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public AppsCreateContentAttachmentResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}