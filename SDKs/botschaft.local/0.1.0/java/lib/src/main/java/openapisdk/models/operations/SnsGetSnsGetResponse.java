package openapisdk.models.operations;



public class SnsGetSnsGetResponse {
    public String contentType;
    public SnsGetSnsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public SnsGetSnsGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public SnsGetSnsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object snsGetSnsGet200ApplicationJSONAny;
    public SnsGetSnsGetResponse withSnsGetSnsGet200ApplicationJsonAny(Object snsGetSnsGet200ApplicationJSONAny) {
        this.snsGetSnsGet200ApplicationJSONAny = snsGetSnsGet200ApplicationJSONAny;
        return this;
    }
}