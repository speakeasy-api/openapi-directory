package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LogTarget
 * A log target.
**/
public class LogTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetName")
    public String targetName;
    public LogTarget withTargetName(String targetName) {
        this.targetName = targetName;
        return this;
    }
    @JsonProperty("targetType")
    public LogTargetTypeEnum targetType;
    public LogTarget withTargetType(LogTargetTypeEnum targetType) {
        this.targetType = targetType;
        return this;
    }
}