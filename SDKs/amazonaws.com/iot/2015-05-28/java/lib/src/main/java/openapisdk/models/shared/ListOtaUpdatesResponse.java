package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListOtaUpdatesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListOtaUpdatesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("otaUpdates")
    public OtaUpdateSummary[] otaUpdates;
    public ListOtaUpdatesResponse withOtaUpdates(OtaUpdateSummary[] otaUpdates) {
        this.otaUpdates = otaUpdates;
        return this;
    }
}