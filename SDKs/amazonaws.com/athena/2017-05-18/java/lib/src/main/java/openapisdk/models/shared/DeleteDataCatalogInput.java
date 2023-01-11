package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteDataCatalogInput {
    @JsonProperty("Name")
    public String name;
    public DeleteDataCatalogInput withName(String name) {
        this.name = name;
        return this;
    }
}