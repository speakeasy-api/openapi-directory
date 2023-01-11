package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChangeSetSummaryListItem
 * A summary of a change set returned in a list of change sets when the <code>ListChangeSets</code> action is called.
**/
public class ChangeSetSummaryListItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChangeSetArn")
    public String changeSetArn;
    public ChangeSetSummaryListItem withChangeSetArn(String changeSetArn) {
        this.changeSetArn = changeSetArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChangeSetId")
    public String changeSetId;
    public ChangeSetSummaryListItem withChangeSetId(String changeSetId) {
        this.changeSetId = changeSetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChangeSetName")
    public String changeSetName;
    public ChangeSetSummaryListItem withChangeSetName(String changeSetName) {
        this.changeSetName = changeSetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndTime")
    public String endTime;
    public ChangeSetSummaryListItem withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EntityIdList")
    public String[] entityIdList;
    public ChangeSetSummaryListItem withEntityIdList(String[] entityIdList) {
        this.entityIdList = entityIdList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailureCode")
    public FailureCodeEnum failureCode;
    public ChangeSetSummaryListItem withFailureCode(FailureCodeEnum failureCode) {
        this.failureCode = failureCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartTime")
    public String startTime;
    public ChangeSetSummaryListItem withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public ChangeStatusEnum status;
    public ChangeSetSummaryListItem withStatus(ChangeStatusEnum status) {
        this.status = status;
        return this;
    }
}