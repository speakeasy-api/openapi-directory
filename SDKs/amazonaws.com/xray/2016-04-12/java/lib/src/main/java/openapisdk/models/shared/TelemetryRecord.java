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
 * TelemetryRecord
 * <p/>
**/
public class TelemetryRecord {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BackendConnectionErrors")
    public BackendConnectionErrors backendConnectionErrors;
    public TelemetryRecord withBackendConnectionErrors(BackendConnectionErrors backendConnectionErrors) {
        this.backendConnectionErrors = backendConnectionErrors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SegmentsReceivedCount")
    public Long segmentsReceivedCount;
    public TelemetryRecord withSegmentsReceivedCount(Long segmentsReceivedCount) {
        this.segmentsReceivedCount = segmentsReceivedCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SegmentsRejectedCount")
    public Long segmentsRejectedCount;
    public TelemetryRecord withSegmentsRejectedCount(Long segmentsRejectedCount) {
        this.segmentsRejectedCount = segmentsRejectedCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SegmentsSentCount")
    public Long segmentsSentCount;
    public TelemetryRecord withSegmentsSentCount(Long segmentsSentCount) {
        this.segmentsSentCount = segmentsSentCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SegmentsSpilloverCount")
    public Long segmentsSpilloverCount;
    public TelemetryRecord withSegmentsSpilloverCount(Long segmentsSpilloverCount) {
        this.segmentsSpilloverCount = segmentsSpilloverCount;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("Timestamp")
    public OffsetDateTime timestamp;
    public TelemetryRecord withTimestamp(OffsetDateTime timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}