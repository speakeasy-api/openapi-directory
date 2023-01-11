package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsRdsDbParameterGroup
 * Provides information about a parameter group for a DB instance.
**/
public class AwsRdsDbParameterGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DbParameterGroupName")
    public String dbParameterGroupName;
    public AwsRdsDbParameterGroup withDbParameterGroupName(String dbParameterGroupName) {
        this.dbParameterGroupName = dbParameterGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParameterApplyStatus")
    public String parameterApplyStatus;
    public AwsRdsDbParameterGroup withParameterApplyStatus(String parameterApplyStatus) {
        this.parameterApplyStatus = parameterApplyStatus;
        return this;
    }
}