package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeRdsDbInstancesResult
 * Contains the response to a <code>DescribeRdsDbInstances</code> request.
**/
public class DescribeRdsDbInstancesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RdsDbInstances")
    public RdsDbInstance[] rdsDbInstances;
    public DescribeRdsDbInstancesResult withRdsDbInstances(RdsDbInstance[] rdsDbInstances) {
        this.rdsDbInstances = rdsDbInstances;
        return this;
    }
}