package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CustomColumnList {
    @JsonProperty("customColumns")
    public CustomColumn[] customColumns;
    public CustomColumnList withCustomColumns(CustomColumn[] customColumns) {
        this.customColumns = customColumns;
        return this;
    }
    @JsonProperty("links")
    public CustomColumnListLinks links;
    public CustomColumnList withLinks(CustomColumnListLinks links) {
        this.links = links;
        return this;
    }
}