package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PurgeCdnCacheRequestBody {
    @JsonProperty("files")
    public String[] files;
    public PurgeCdnCacheRequestBody withFiles(String[] files) {
        this.files = files;
        return this;
    }
}