package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class IssuesUpdateLabelRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public String color;
    public IssuesUpdateLabelRequestBody withColor(String color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public IssuesUpdateLabelRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("new_name")
    public String newName;
    public IssuesUpdateLabelRequestBody withNewName(String newName) {
        this.newName = newName;
        return this;
    }
}