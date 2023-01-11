package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class IssuesCreateLabelRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public String color;
    public IssuesCreateLabelRequestBody withColor(String color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public IssuesCreateLabelRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public IssuesCreateLabelRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}