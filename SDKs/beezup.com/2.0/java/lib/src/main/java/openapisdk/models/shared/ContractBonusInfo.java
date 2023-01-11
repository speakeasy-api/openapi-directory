package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ContractBonusInfo
 * Describe the bonus information related to your current contract.
**/
public class ContractBonusInfo {
    @JsonProperty("bonuses")
    public BonusInfo[] bonuses;
    public ContractBonusInfo withBonuses(BonusInfo[] bonuses) {
        this.bonuses = bonuses;
        return this;
    }
}