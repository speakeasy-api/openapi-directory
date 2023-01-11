package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Condition
 * <p>A JSON string which you can use to limit the event bus permissions you are granting to only accounts that fulfill the condition. Currently, the only supported condition is membership in a certain Amazon Web Services organization. The string must contain <code>Type</code>, <code>Key</code>, and <code>Value</code> fields. The <code>Value</code> field specifies the ID of the Amazon Web Services organization. Following is an example value for <code>Condition</code>:</p> <p> <code>'{"Type" : "StringEquals", "Key": "aws:PrincipalOrgID", "Value": "o-1234567890"}'</code> </p>
**/
public class Condition {
    @JsonProperty("Key")
    public String key;
    public Condition withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonProperty("Type")
    public String type;
    public Condition withType(String type) {
        this.type = type;
        return this;
    }
    @JsonProperty("Value")
    public String value;
    public Condition withValue(String value) {
        this.value = value;
        return this;
    }
}