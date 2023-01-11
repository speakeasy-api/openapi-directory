package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Tag
 * <p>A tag, consisting of a key and a value.</p> <p>This tag is available for use by Amazon Web Services services that support tags in CodeBuild.</p>
**/
public class Tag {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public Tag withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public Tag withValue(String value) {
        this.value = value;
        return this;
    }
}