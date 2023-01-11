package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UploadStatusQuery {
    @JsonProperty("ids")
    public String[] ids;
    public UploadStatusQuery withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
}