package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BonusInfo {
    @JsonProperty("amount")
    public Double amount;
    public BonusInfo withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("bonusType")
    public BonusTypeEnum bonusType;
    public BonusInfo withBonusType(BonusTypeEnum bonusType) {
        this.bonusType = bonusType;
        return this;
    }
}