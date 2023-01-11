package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeAttackRequest {
    @JsonProperty("AttackId")
    public String attackId;
    public DescribeAttackRequest withAttackId(String attackId) {
        this.attackId = attackId;
        return this;
    }
}