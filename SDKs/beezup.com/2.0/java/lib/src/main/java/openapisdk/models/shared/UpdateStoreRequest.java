package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateStoreRequest {
    @JsonProperty("name")
    public String name;
    public UpdateStoreRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("sectors")
    public String[] sectors;
    public UpdateStoreRequest withSectors(String[] sectors) {
        this.sectors = sectors;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public UpdateStoreRequest withUrl(String url) {
        this.url = url;
        return this;
    }
}