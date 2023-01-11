package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostConfigurationsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public PostConfigurationsRequestBody withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public PostConfigurationsRequestBody withValue(String value) {
        this.value = value;
        return this;
    }
}