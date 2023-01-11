package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendBonusRequest {
    @JsonProperty("AssignmentId")
    public String assignmentId;
    public SendBonusRequest withAssignmentId(String assignmentId) {
        this.assignmentId = assignmentId;
        return this;
    }
    @JsonProperty("BonusAmount")
    public String bonusAmount;
    public SendBonusRequest withBonusAmount(String bonusAmount) {
        this.bonusAmount = bonusAmount;
        return this;
    }
    @JsonProperty("Reason")
    public String reason;
    public SendBonusRequest withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UniqueRequestToken")
    public String uniqueRequestToken;
    public SendBonusRequest withUniqueRequestToken(String uniqueRequestToken) {
        this.uniqueRequestToken = uniqueRequestToken;
        return this;
    }
    @JsonProperty("WorkerId")
    public String workerId;
    public SendBonusRequest withWorkerId(String workerId) {
        this.workerId = workerId;
        return this;
    }
}