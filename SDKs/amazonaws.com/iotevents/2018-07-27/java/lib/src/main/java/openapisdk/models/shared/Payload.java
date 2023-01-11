package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Payload
 * <p>Information needed to configure the payload.</p> <p>By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use <code>contentExpression</code>.</p>
**/
public class Payload {
    @JsonProperty("contentExpression")
    public String contentExpression;
    public Payload withContentExpression(String contentExpression) {
        this.contentExpression = contentExpression;
        return this;
    }
    @JsonProperty("type")
    public PayloadTypeEnum type;
    public Payload withType(PayloadTypeEnum type) {
        this.type = type;
        return this;
    }
}