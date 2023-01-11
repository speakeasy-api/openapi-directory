package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeAttackResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Attack")
    public AttackDetail attack;
    public DescribeAttackResponse withAttack(AttackDetail attack) {
        this.attack = attack;
        return this;
    }
}