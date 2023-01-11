package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TagModelHaljsonLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public String self;
    public TagModelHaljsonLinks withSelf(String self) {
        this.self = self;
        return this;
    }
}