package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AttackStatisticsDataItem
 * A single attack statistics data record. This is returned by <a>DescribeAttackStatistics</a> along with a time range indicating the time period that the attack statistics apply to. 
**/
public class AttackStatisticsDataItem {
    @JsonProperty("AttackCount")
    public Long attackCount;
    public AttackStatisticsDataItem withAttackCount(Long attackCount) {
        this.attackCount = attackCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttackVolume")
    public AttackVolume attackVolume;
    public AttackStatisticsDataItem withAttackVolume(AttackVolume attackVolume) {
        this.attackVolume = attackVolume;
        return this;
    }
}