package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListRecordingConfigurationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListRecordingConfigurationsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("recordingConfigurations")
    public RecordingConfigurationSummary[] recordingConfigurations;
    public ListRecordingConfigurationsResponse withRecordingConfigurations(RecordingConfigurationSummary[] recordingConfigurations) {
        this.recordingConfigurations = recordingConfigurations;
        return this;
    }
}