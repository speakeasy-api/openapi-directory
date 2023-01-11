package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomColumn
 * The custom column configuration
**/
public class CustomColumn {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("catalogColumnDependencies")
    public String[] catalogColumnDependencies;
    public CustomColumn withCatalogColumnDependencies(String[] catalogColumnDependencies) {
        this.catalogColumnDependencies = catalogColumnDependencies;
        return this;
    }
    @JsonProperty("configuration")
    public ColumnConfiguration configuration;
    public CustomColumn withConfiguration(ColumnConfiguration configuration) {
        this.configuration = configuration;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public CustomColumn withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("links")
    public CustomColumnLinks links;
    public CustomColumn withLinks(CustomColumnLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("userColumName")
    public String userColumName;
    public CustomColumn withUserColumName(String userColumName) {
        this.userColumName = userColumName;
        return this;
    }
}