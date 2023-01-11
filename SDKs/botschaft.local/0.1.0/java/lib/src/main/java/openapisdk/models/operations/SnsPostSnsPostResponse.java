package openapisdk.models.operations;



public class SnsPostSnsPostResponse {
    public String contentType;
    public SnsPostSnsPostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public SnsPostSnsPostResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public SnsPostSnsPostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object snsPostSnsPost200ApplicationJSONAny;
    public SnsPostSnsPostResponse withSnsPostSnsPost200ApplicationJsonAny(Object snsPostSnsPost200ApplicationJSONAny) {
        this.snsPostSnsPost200ApplicationJSONAny = snsPostSnsPost200ApplicationJSONAny;
        return this;
    }
}