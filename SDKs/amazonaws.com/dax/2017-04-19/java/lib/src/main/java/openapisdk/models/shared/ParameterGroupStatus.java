package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ParameterGroupStatus
 * The status of a parameter group.
**/
public class ParameterGroupStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NodeIdsToReboot")
    public String[] nodeIdsToReboot;
    public ParameterGroupStatus withNodeIdsToReboot(String[] nodeIdsToReboot) {
        this.nodeIdsToReboot = nodeIdsToReboot;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParameterApplyStatus")
    public String parameterApplyStatus;
    public ParameterGroupStatus withParameterApplyStatus(String parameterApplyStatus) {
        this.parameterApplyStatus = parameterApplyStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParameterGroupName")
    public String parameterGroupName;
    public ParameterGroupStatus withParameterGroupName(String parameterGroupName) {
        this.parameterGroupName = parameterGroupName;
        return this;
    }
}