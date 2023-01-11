package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataCatalog
 * Contains information about a data catalog in an Amazon Web Services account.
**/
public class DataCatalog {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public DataCatalog withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public DataCatalog withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Parameters")
    public java.util.Map<String, String> parameters;
    public DataCatalog withParameters(java.util.Map<String, String> parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonProperty("Type")
    public DataCatalogTypeEnum type;
    public DataCatalog withType(DataCatalogTypeEnum type) {
        this.type = type;
        return this;
    }
}