package openapisdk.models.operations;



public class ActivityGetThreadResponse {
    public String contentType;
    public ActivityGetThreadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActivityGetThreadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ActivityGetThreadResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Thread thread;
    public ActivityGetThreadResponse withThread(openapisdk.models.shared.Thread thread) {
        this.thread = thread;
        return this;
    }
}