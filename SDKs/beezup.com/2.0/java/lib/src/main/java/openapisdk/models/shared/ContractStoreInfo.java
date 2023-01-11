package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContractStoreInfo
 * Describe the store information related to the offer.
**/
public class ContractStoreInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalStorePrice")
    public Double additionalStorePrice;
    public ContractStoreInfo withAdditionalStorePrice(Double additionalStorePrice) {
        this.additionalStorePrice = additionalStorePrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxStoreCount")
    public Integer maxStoreCount;
    public ContractStoreInfo withMaxStoreCount(Integer maxStoreCount) {
        this.maxStoreCount = maxStoreCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minStoreCount")
    public Integer minStoreCount;
    public ContractStoreInfo withMinStoreCount(Integer minStoreCount) {
        this.minStoreCount = minStoreCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownedStoreCount")
    public Integer ownedStoreCount;
    public ContractStoreInfo withOwnedStoreCount(Integer ownedStoreCount) {
        this.ownedStoreCount = ownedStoreCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storeCount")
    public Integer storeCount;
    public ContractStoreInfo withStoreCount(Integer storeCount) {
        this.storeCount = storeCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storeIncluded")
    public Integer storeIncluded;
    public ContractStoreInfo withStoreIncluded(Integer storeIncluded) {
        this.storeIncluded = storeIncluded;
        return this;
    }
}