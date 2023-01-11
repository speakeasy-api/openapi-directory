package openapisdk.models.operations;



public class EobsCreateResponse {
    public String contentType;
    public EobsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EobObject eobObject;
    public EobsCreateResponse withEobObject(openapisdk.models.shared.EobObject eobObject) {
        this.eobObject = eobObject;
        return this;
    }
    public Long statusCode;
    public EobsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}