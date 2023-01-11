package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DetectedCatalogColumn
 * The catalog column detected during the first parsing step
**/
public class DetectedCatalogColumn {
    @JsonProperty("catalogColumnName")
    public String catalogColumnName;
    public DetectedCatalogColumn withCatalogColumnName(String catalogColumnName) {
        this.catalogColumnName = catalogColumnName;
        return this;
    }
    @JsonProperty("configuration")
    public ColumnConfiguration configuration;
    public DetectedCatalogColumn withConfiguration(ColumnConfiguration configuration) {
        this.configuration = configuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duplicateProductValueConfiguration")
    public DuplicateProductValueConfiguration duplicateProductValueConfiguration;
    public DetectedCatalogColumn withDuplicateProductValueConfiguration(DuplicateProductValueConfiguration duplicateProductValueConfiguration) {
        this.duplicateProductValueConfiguration = duplicateProductValueConfiguration;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public DetectedCatalogColumn withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ignored")
    public Boolean ignored;
    public DetectedCatalogColumn withIgnored(Boolean ignored) {
        this.ignored = ignored;
        return this;
    }
    @JsonProperty("links")
    public DetectedCatalogColumnLinks links;
    public DetectedCatalogColumn withLinks(DetectedCatalogColumnLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("userColumName")
    public String userColumName;
    public DetectedCatalogColumn withUserColumName(String userColumName) {
        this.userColumName = userColumName;
        return this;
    }
}