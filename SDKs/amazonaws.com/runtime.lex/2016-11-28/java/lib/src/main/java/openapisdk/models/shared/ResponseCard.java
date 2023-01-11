package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResponseCard
 * If you configure a response card when creating your bots, Amazon Lex substitutes the session attributes and slot values that are available, and then returns it. The response card can also come from a Lambda function ( <code>dialogCodeHook</code> and <code>fulfillmentActivity</code> on an intent).
**/
public class ResponseCard {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentType")
    public ContentTypeEnum contentType;
    public ResponseCard withContentType(ContentTypeEnum contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("genericAttachments")
    public GenericAttachment[] genericAttachments;
    public ResponseCard withGenericAttachments(GenericAttachment[] genericAttachments) {
        this.genericAttachments = genericAttachments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public ResponseCard withVersion(String version) {
        this.version = version;
        return this;
    }
}