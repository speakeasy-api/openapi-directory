package openapisdk.models.operations;



public class EobsReadResponse {
    public String contentType;
    public EobsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EobObject eobObject;
    public EobsReadResponse withEobObject(openapisdk.models.shared.EobObject eobObject) {
        this.eobObject = eobObject;
        return this;
    }
    public Long statusCode;
    public EobsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}