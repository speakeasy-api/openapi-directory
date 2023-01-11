package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SetV2LoggingLevelRequestBodyLogTarget
 * A log target.
**/
public class SetV2LoggingLevelRequestBodyLogTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetName")
    public String targetName;
    public SetV2LoggingLevelRequestBodyLogTarget withTargetName(String targetName) {
        this.targetName = targetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetType")
    public openapisdk.models.shared.LogTargetTypeEnum targetType;
    public SetV2LoggingLevelRequestBodyLogTarget withTargetType(openapisdk.models.shared.LogTargetTypeEnum targetType) {
        this.targetType = targetType;
        return this;
    }
}