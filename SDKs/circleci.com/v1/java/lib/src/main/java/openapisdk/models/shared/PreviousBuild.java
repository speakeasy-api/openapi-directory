package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PreviousBuild
 * previous build
**/
public class PreviousBuild {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("build_num")
    public Long buildNum;
    public PreviousBuild withBuildNum(Long buildNum) {
        this.buildNum = buildNum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("build_time_millis")
    public Long buildTimeMillis;
    public PreviousBuild withBuildTimeMillis(Long buildTimeMillis) {
        this.buildTimeMillis = buildTimeMillis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public StatusEnum status;
    public PreviousBuild withStatus(StatusEnum status) {
        this.status = status;
        return this;
    }
}