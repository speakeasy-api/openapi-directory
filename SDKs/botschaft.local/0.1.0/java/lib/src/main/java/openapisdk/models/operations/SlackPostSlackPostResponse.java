package openapisdk.models.operations;



public class SlackPostSlackPostResponse {
    public String contentType;
    public SlackPostSlackPostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public SlackPostSlackPostResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public SlackPostSlackPostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object slackPostSlackPost200ApplicationJSONAny;
    public SlackPostSlackPostResponse withSlackPostSlackPost200ApplicationJsonAny(Object slackPostSlackPost200ApplicationJSONAny) {
        this.slackPostSlackPost200ApplicationJSONAny = slackPostSlackPost200ApplicationJSONAny;
        return this;
    }
}