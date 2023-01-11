package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Tag
 * A key:value pair that adds metadata to a resource used by Amazon Transcribe. For example, a tag with the key:value pair ‘Department’:’Sales’ might be added to a resource to indicate its use by your organization's sales department.
**/
public class Tag {
    @JsonProperty("Key")
    public String key;
    public Tag withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonProperty("Value")
    public String value;
    public Tag withValue(String value) {
        this.value = value;
        return this;
    }
}