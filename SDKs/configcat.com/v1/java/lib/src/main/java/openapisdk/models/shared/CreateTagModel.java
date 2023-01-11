package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateTagModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public String color;
    public CreateTagModel withColor(String color) {
        this.color = color;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateTagModel withName(String name) {
        this.name = name;
        return this;
    }
}