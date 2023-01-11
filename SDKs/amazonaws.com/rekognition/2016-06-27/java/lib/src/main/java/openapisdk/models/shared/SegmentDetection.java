package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SegmentDetection
 * A technical cue or shot detection segment detected in a video. An array of <code>SegmentDetection</code> objects containing all segments detected in a stored video is returned by <a>GetSegmentDetection</a>. 
**/
public class SegmentDetection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DurationFrames")
    public Long durationFrames;
    public SegmentDetection withDurationFrames(Long durationFrames) {
        this.durationFrames = durationFrames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DurationMillis")
    public Long durationMillis;
    public SegmentDetection withDurationMillis(Long durationMillis) {
        this.durationMillis = durationMillis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DurationSMPTE")
    public String durationSMPTE;
    public SegmentDetection withDurationSmpte(String durationSMPTE) {
        this.durationSMPTE = durationSMPTE;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndFrameNumber")
    public Long endFrameNumber;
    public SegmentDetection withEndFrameNumber(Long endFrameNumber) {
        this.endFrameNumber = endFrameNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndTimecodeSMPTE")
    public String endTimecodeSMPTE;
    public SegmentDetection withEndTimecodeSmpte(String endTimecodeSMPTE) {
        this.endTimecodeSMPTE = endTimecodeSMPTE;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndTimestampMillis")
    public Long endTimestampMillis;
    public SegmentDetection withEndTimestampMillis(Long endTimestampMillis) {
        this.endTimestampMillis = endTimestampMillis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ShotSegment")
    public ShotSegment shotSegment;
    public SegmentDetection withShotSegment(ShotSegment shotSegment) {
        this.shotSegment = shotSegment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartFrameNumber")
    public Long startFrameNumber;
    public SegmentDetection withStartFrameNumber(Long startFrameNumber) {
        this.startFrameNumber = startFrameNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartTimecodeSMPTE")
    public String startTimecodeSMPTE;
    public SegmentDetection withStartTimecodeSmpte(String startTimecodeSMPTE) {
        this.startTimecodeSMPTE = startTimecodeSMPTE;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartTimestampMillis")
    public Long startTimestampMillis;
    public SegmentDetection withStartTimestampMillis(Long startTimestampMillis) {
        this.startTimestampMillis = startTimestampMillis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TechnicalCueSegment")
    public TechnicalCueSegment technicalCueSegment;
    public SegmentDetection withTechnicalCueSegment(TechnicalCueSegment technicalCueSegment) {
        this.technicalCueSegment = technicalCueSegment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public SegmentTypeEnum type;
    public SegmentDetection withType(SegmentTypeEnum type) {
        this.type = type;
        return this;
    }
}