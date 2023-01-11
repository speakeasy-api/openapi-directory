package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * IssueEventLabel
 * Issue Event Label
**/
public class IssueEventLabel {
    @JsonProperty("color")
    public String color;
    public IssueEventLabel withColor(String color) {
        this.color = color;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public IssueEventLabel withName(String name) {
        this.name = name;
        return this;
    }
}