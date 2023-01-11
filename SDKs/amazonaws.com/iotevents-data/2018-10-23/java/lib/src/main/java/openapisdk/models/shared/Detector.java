package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Detector
 * Information about the detector (instance).
**/
public class Detector {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationTime")
    public OffsetDateTime creationTime;
    public Detector withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detectorModelName")
    public String detectorModelName;
    public Detector withDetectorModelName(String detectorModelName) {
        this.detectorModelName = detectorModelName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detectorModelVersion")
    public String detectorModelVersion;
    public Detector withDetectorModelVersion(String detectorModelVersion) {
        this.detectorModelVersion = detectorModelVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyValue")
    public String keyValue;
    public Detector withKeyValue(String keyValue) {
        this.keyValue = keyValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdateTime")
    public OffsetDateTime lastUpdateTime;
    public Detector withLastUpdateTime(OffsetDateTime lastUpdateTime) {
        this.lastUpdateTime = lastUpdateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public DetectorState state;
    public Detector withState(DetectorState state) {
        this.state = state;
        return this;
    }
}