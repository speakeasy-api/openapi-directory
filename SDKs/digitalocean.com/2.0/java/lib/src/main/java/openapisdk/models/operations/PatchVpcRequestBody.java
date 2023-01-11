package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PatchVpcRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default")
    public Boolean default_;
    public PatchVpcRequestBody withDefault(Boolean default_) {
        this.default_ = default_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PatchVpcRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PatchVpcRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}