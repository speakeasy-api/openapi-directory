package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JobLogEventData
 * Job log data
**/
public class JobLogEventData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversionServerID")
    public String conversionServerID;
    public JobLogEventData withConversionServerId(String conversionServerID) {
        this.conversionServerID = conversionServerID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rawError")
    public String rawError;
    public JobLogEventData withRawError(String rawError) {
        this.rawError = rawError;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceServerID")
    public String sourceServerID;
    public JobLogEventData withSourceServerId(String sourceServerID) {
        this.sourceServerID = sourceServerID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetInstanceID")
    public String targetInstanceID;
    public JobLogEventData withTargetInstanceId(String targetInstanceID) {
        this.targetInstanceID = targetInstanceID;
        return this;
    }
}