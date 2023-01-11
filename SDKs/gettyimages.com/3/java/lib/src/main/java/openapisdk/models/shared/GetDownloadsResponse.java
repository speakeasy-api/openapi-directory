package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDownloadsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downloads")
    public HistoricalDownload[] downloads;
    public GetDownloadsResponse withDownloads(HistoricalDownload[] downloads) {
        this.downloads = downloads;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result_count")
    public Integer resultCount;
    public GetDownloadsResponse withResultCount(Integer resultCount) {
        this.resultCount = resultCount;
        return this;
    }
}