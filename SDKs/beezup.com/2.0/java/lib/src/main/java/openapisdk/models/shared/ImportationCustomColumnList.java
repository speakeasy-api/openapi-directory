package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ImportationCustomColumnList {
    @JsonProperty("customColumns")
    public ImportationCustomColumn[] customColumns;
    public ImportationCustomColumnList withCustomColumns(ImportationCustomColumn[] customColumns) {
        this.customColumns = customColumns;
        return this;
    }
    @JsonProperty("links")
    public CustomColumnListLinks links;
    public ImportationCustomColumnList withLinks(CustomColumnListLinks links) {
        this.links = links;
        return this;
    }
}