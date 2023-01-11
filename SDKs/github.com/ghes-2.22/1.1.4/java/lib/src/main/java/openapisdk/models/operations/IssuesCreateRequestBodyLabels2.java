package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class IssuesCreateRequestBodyLabels2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public String color;
    public IssuesCreateRequestBodyLabels2 withColor(String color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public IssuesCreateRequestBodyLabels2 withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public IssuesCreateRequestBodyLabels2 withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public IssuesCreateRequestBodyLabels2 withName(String name) {
        this.name = name;
        return this;
    }
}