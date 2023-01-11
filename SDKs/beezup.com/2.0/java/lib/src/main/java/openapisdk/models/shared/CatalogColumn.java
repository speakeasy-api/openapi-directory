package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CatalogColumn
 * The catalog column configuration
**/
public class CatalogColumn {
    @JsonProperty("catalogColumnName")
    public String catalogColumnName;
    public CatalogColumn withCatalogColumnName(String catalogColumnName) {
        this.catalogColumnName = catalogColumnName;
        return this;
    }
    @JsonProperty("configuration")
    public ColumnConfiguration configuration;
    public CatalogColumn withConfiguration(ColumnConfiguration configuration) {
        this.configuration = configuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duplicateProductValueConfiguration")
    public DuplicateProductValueConfiguration duplicateProductValueConfiguration;
    public CatalogColumn withDuplicateProductValueConfiguration(DuplicateProductValueConfiguration duplicateProductValueConfiguration) {
        this.duplicateProductValueConfiguration = duplicateProductValueConfiguration;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public CatalogColumn withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ignored")
    public Boolean ignored;
    public CatalogColumn withIgnored(Boolean ignored) {
        this.ignored = ignored;
        return this;
    }
    @JsonProperty("links")
    public CatalogColumnLinks links;
    public CatalogColumn withLinks(CatalogColumnLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("userColumName")
    public String userColumName;
    public CatalogColumn withUserColumName(String userColumName) {
        this.userColumName = userColumName;
        return this;
    }
}