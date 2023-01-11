package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLogs200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("historic_urls")
    public String[] historicUrls;
    public GetLogs200ApplicationJson withHistoricUrls(String[] historicUrls) {
        this.historicUrls = historicUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("live_url")
    public String liveUrl;
    public GetLogs200ApplicationJson withLiveUrl(String liveUrl) {
        this.liveUrl = liveUrl;
        return this;
    }
}