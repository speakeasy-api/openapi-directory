package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourceGroupTag
 * This data type is used as one of the elements of the <a>ResourceGroup</a> data type.
**/
public class ResourceGroupTag {
    @JsonProperty("key")
    public String key;
    public ResourceGroupTag withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public ResourceGroupTag withValue(String value) {
        this.value = value;
        return this;
    }
}