package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrderTypeInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default")
    public Boolean default_;
    public OrderTypeInput withDefault(Boolean default_) {
        this.default_ = default_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public OrderTypeInput withName(String name) {
        this.name = name;
        return this;
    }
}