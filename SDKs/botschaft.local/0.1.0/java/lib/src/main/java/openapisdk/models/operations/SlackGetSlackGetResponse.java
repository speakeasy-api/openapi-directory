package openapisdk.models.operations;



public class SlackGetSlackGetResponse {
    public String contentType;
    public SlackGetSlackGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public SlackGetSlackGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public SlackGetSlackGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object slackGetSlackGet200ApplicationJSONAny;
    public SlackGetSlackGetResponse withSlackGetSlackGet200ApplicationJsonAny(Object slackGetSlackGet200ApplicationJSONAny) {
        this.slackGetSlackGet200ApplicationJSONAny = slackGetSlackGet200ApplicationJSONAny;
        return this;
    }
}