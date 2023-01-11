package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ModifierInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternate_name")
    public String alternateName;
    public ModifierInput withAlternateName(String alternateName) {
        this.alternateName = alternateName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("available")
    public Boolean available;
    public ModifierInput withAvailable(Boolean available) {
        this.available = available;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public CurrencyEnum currency;
    public ModifierInput withCurrency(CurrencyEnum currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idempotency_key")
    public String idempotencyKey;
    public ModifierInput withIdempotencyKey(String idempotencyKey) {
        this.idempotencyKey = idempotencyKey;
        return this;
    }
    @JsonProperty("modifier_group_id")
    public String modifierGroupId;
    public ModifierInput withModifierGroupId(String modifierGroupId) {
        this.modifierGroupId = modifierGroupId;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ModifierInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price_amount")
    public Double priceAmount;
    public ModifierInput withPriceAmount(Double priceAmount) {
        this.priceAmount = priceAmount;
        return this;
    }
}