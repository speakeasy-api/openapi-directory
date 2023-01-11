package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeChangeSetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChangeSet")
    public ChangeSummary[] changeSet;
    public DescribeChangeSetResponse withChangeSet(ChangeSummary[] changeSet) {
        this.changeSet = changeSet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChangeSetArn")
    public String changeSetArn;
    public DescribeChangeSetResponse withChangeSetArn(String changeSetArn) {
        this.changeSetArn = changeSetArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChangeSetId")
    public String changeSetId;
    public DescribeChangeSetResponse withChangeSetId(String changeSetId) {
        this.changeSetId = changeSetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChangeSetName")
    public String changeSetName;
    public DescribeChangeSetResponse withChangeSetName(String changeSetName) {
        this.changeSetName = changeSetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndTime")
    public String endTime;
    public DescribeChangeSetResponse withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailureCode")
    public FailureCodeEnum failureCode;
    public DescribeChangeSetResponse withFailureCode(FailureCodeEnum failureCode) {
        this.failureCode = failureCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailureDescription")
    public String failureDescription;
    public DescribeChangeSetResponse withFailureDescription(String failureDescription) {
        this.failureDescription = failureDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartTime")
    public String startTime;
    public DescribeChangeSetResponse withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public ChangeStatusEnum status;
    public DescribeChangeSetResponse withStatus(ChangeStatusEnum status) {
        this.status = status;
        return this;
    }
}