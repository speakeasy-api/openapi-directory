package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRecordingConfigurationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recordingConfiguration")
    public RecordingConfiguration recordingConfiguration;
    public GetRecordingConfigurationResponse withRecordingConfiguration(RecordingConfiguration recordingConfiguration) {
        this.recordingConfiguration = recordingConfiguration;
        return this;
    }
}