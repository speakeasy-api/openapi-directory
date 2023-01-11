package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BoundariesQuery {
    @JsonProperty("ids")
    public String[] ids;
    public BoundariesQuery withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
}