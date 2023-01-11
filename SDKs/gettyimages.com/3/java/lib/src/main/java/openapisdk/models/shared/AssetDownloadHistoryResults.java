package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssetDownloadHistoryResults {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downloads")
    public Object downloads;
    public AssetDownloadHistoryResults withDownloads(Object downloads) {
        this.downloads = downloads;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AssetDownloadHistoryResults withId(String id) {
        this.id = id;
        return this;
    }
}