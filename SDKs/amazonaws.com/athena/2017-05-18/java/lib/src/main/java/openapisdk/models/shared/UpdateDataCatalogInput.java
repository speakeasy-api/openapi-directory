package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateDataCatalogInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public UpdateDataCatalogInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public UpdateDataCatalogInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Parameters")
    public java.util.Map<String, String> parameters;
    public UpdateDataCatalogInput withParameters(java.util.Map<String, String> parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonProperty("Type")
    public DataCatalogTypeEnum type;
    public UpdateDataCatalogInput withType(DataCatalogTypeEnum type) {
        this.type = type;
        return this;
    }
}