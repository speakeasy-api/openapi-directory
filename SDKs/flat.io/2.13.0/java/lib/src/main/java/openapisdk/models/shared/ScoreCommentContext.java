package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScoreCommentContext
 * The context of the comment (for inline/contextualized comments). A context will include all the information related to the location of the comment (i.e. score parts, range of measure, time position).
 * 
**/
public class ScoreCommentContext {
    @JsonProperty("measureUuids")
    public String[] measureUuids;
    public ScoreCommentContext withMeasureUuids(String[] measureUuids) {
        this.measureUuids = measureUuids;
        return this;
    }
    @JsonProperty("partUuid")
    public String partUuid;
    public ScoreCommentContext withPartUuid(String partUuid) {
        this.partUuid = partUuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("staffIdx")
    public Double staffIdx;
    public ScoreCommentContext withStaffIdx(Double staffIdx) {
        this.staffIdx = staffIdx;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("staffUuid")
    public String staffUuid;
    public ScoreCommentContext withStaffUuid(String staffUuid) {
        this.staffUuid = staffUuid;
        return this;
    }
    @JsonProperty("startDpq")
    public Double startDpq;
    public ScoreCommentContext withStartDpq(Double startDpq) {
        this.startDpq = startDpq;
        return this;
    }
    @JsonProperty("startTimePos")
    public Double startTimePos;
    public ScoreCommentContext withStartTimePos(Double startTimePos) {
        this.startTimePos = startTimePos;
        return this;
    }
    @JsonProperty("stopDpq")
    public Double stopDpq;
    public ScoreCommentContext withStopDpq(Double stopDpq) {
        this.stopDpq = stopDpq;
        return this;
    }
    @JsonProperty("stopTimePos")
    public Double stopTimePos;
    public ScoreCommentContext withStopTimePos(Double stopTimePos) {
        this.stopTimePos = stopTimePos;
        return this;
    }
}