package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ImportationCustomColumn
 * The custom column configuration
**/
public class ImportationCustomColumn {
    @JsonProperty("configuration")
    public ColumnConfiguration configuration;
    public ImportationCustomColumn withConfiguration(ColumnConfiguration configuration) {
        this.configuration = configuration;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public ImportationCustomColumn withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("links")
    public ImportationCustomColumnLinks links;
    public ImportationCustomColumn withLinks(ImportationCustomColumnLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("userColumName")
    public String userColumName;
    public ImportationCustomColumn withUserColumName(String userColumName) {
        this.userColumName = userColumName;
        return this;
    }
}