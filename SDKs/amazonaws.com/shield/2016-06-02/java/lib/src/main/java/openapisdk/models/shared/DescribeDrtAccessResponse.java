package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeDrtAccessResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LogBucketList")
    public String[] logBucketList;
    public DescribeDrtAccessResponse withLogBucketList(String[] logBucketList) {
        this.logBucketList = logBucketList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoleArn")
    public String roleArn;
    public DescribeDrtAccessResponse withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}