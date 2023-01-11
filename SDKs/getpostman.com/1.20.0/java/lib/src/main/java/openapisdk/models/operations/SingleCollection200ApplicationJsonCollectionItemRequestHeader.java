package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SingleCollection200ApplicationJsonCollectionItemRequestHeader {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public SingleCollection200ApplicationJsonCollectionItemRequestHeader withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public SingleCollection200ApplicationJsonCollectionItemRequestHeader withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public SingleCollection200ApplicationJsonCollectionItemRequestHeader withValue(String value) {
        this.value = value;
        return this;
    }
}