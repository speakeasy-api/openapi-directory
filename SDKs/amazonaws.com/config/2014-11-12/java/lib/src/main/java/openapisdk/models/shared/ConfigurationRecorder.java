package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfigurationRecorder
 * An object that represents the recording of configuration changes of an Amazon Web Services resource.
**/
public class ConfigurationRecorder {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ConfigurationRecorder withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recordingGroup")
    public RecordingGroup recordingGroup;
    public ConfigurationRecorder withRecordingGroup(RecordingGroup recordingGroup) {
        this.recordingGroup = recordingGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleARN")
    public String roleARN;
    public ConfigurationRecorder withRoleArn(String roleARN) {
        this.roleARN = roleARN;
        return this;
    }
}