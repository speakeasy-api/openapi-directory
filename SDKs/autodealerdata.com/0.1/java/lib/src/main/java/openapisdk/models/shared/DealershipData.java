package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DealershipData {
    @JsonProperty("address")
    public String address;
    public DealershipData withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonProperty("dealerName")
    public String dealerName;
    public DealershipData withDealerName(String dealerName) {
        this.dealerName = dealerName;
        return this;
    }
    @JsonProperty("ids")
    public Long[] ids;
    public DealershipData withIds(Long[] ids) {
        this.ids = ids;
        return this;
    }
    @JsonProperty("state")
    public String state;
    public DealershipData withState(String state) {
        this.state = state;
        return this;
    }
    @JsonProperty("zipCode")
    public Long zipCode;
    public DealershipData withZipCode(Long zipCode) {
        this.zipCode = zipCode;
        return this;
    }
}