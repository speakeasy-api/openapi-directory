package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Label
 * Color-coded labels help you categorize and filter your issues (just like labels in Gmail).
**/
public class Label {
    @JsonProperty("color")
    public String color;
    public Label withColor(String color) {
        this.color = color;
        return this;
    }
    @JsonProperty("default")
    public Boolean default_;
    public Label withDefault(Boolean default_) {
        this.default_ = default_;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public Label withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public Label withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Label withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public Label withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public Label withUrl(String url) {
        this.url = url;
        return this;
    }
}