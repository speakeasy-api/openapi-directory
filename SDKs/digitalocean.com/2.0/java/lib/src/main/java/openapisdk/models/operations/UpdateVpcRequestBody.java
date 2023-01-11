package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateVpcRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default")
    public Boolean default_;
    public UpdateVpcRequestBody withDefault(Boolean default_) {
        this.default_ = default_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateVpcRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public UpdateVpcRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}