package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeRdsDbInstancesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RdsDbInstanceArns")
    public String[] rdsDbInstanceArns;
    public DescribeRdsDbInstancesRequest withRdsDbInstanceArns(String[] rdsDbInstanceArns) {
        this.rdsDbInstanceArns = rdsDbInstanceArns;
        return this;
    }
    @JsonProperty("StackId")
    public String stackId;
    public DescribeRdsDbInstancesRequest withStackId(String stackId) {
        this.stackId = stackId;
        return this;
    }
}