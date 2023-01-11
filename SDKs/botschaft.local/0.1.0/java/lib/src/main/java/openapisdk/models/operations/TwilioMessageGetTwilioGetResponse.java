package openapisdk.models.operations;



public class TwilioMessageGetTwilioGetResponse {
    public String contentType;
    public TwilioMessageGetTwilioGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public TwilioMessageGetTwilioGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public TwilioMessageGetTwilioGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object twilioMessageGetTwilioGet200ApplicationJSONAny;
    public TwilioMessageGetTwilioGetResponse withTwilioMessageGetTwilioGet200ApplicationJsonAny(Object twilioMessageGetTwilioGet200ApplicationJSONAny) {
        this.twilioMessageGetTwilioGet200ApplicationJSONAny = twilioMessageGetTwilioGet200ApplicationJSONAny;
        return this;
    }
}