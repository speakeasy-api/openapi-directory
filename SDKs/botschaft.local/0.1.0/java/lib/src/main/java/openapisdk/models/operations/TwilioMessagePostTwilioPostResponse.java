package openapisdk.models.operations;



public class TwilioMessagePostTwilioPostResponse {
    public String contentType;
    public TwilioMessagePostTwilioPostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public TwilioMessagePostTwilioPostResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public TwilioMessagePostTwilioPostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object twilioMessagePostTwilioPost200ApplicationJSONAny;
    public TwilioMessagePostTwilioPostResponse withTwilioMessagePostTwilioPost200ApplicationJsonAny(Object twilioMessagePostTwilioPost200ApplicationJSONAny) {
        this.twilioMessagePostTwilioPost200ApplicationJSONAny = twilioMessagePostTwilioPost200ApplicationJSONAny;
        return this;
    }
}