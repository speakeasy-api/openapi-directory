package openapisdk.models.shared;



/**
 * FixedResponseActionConfig
 * Information about an action that returns a custom HTTP response.
**/
public class FixedResponseActionConfig {
    public String contentType;
    public FixedResponseActionConfig withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public String messageBody;
    public FixedResponseActionConfig withMessageBody(String messageBody) {
        this.messageBody = messageBody;
        return this;
    }
    public String statusCode;
    public FixedResponseActionConfig withStatusCode(String statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}