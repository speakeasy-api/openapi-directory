package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BlockedNumber {
    @JsonProperty("id")
    public Double id;
    public BlockedNumber withId(Double id) {
        this.id = id;
        return this;
    }
    @JsonProperty("phoneNumber")
    public String phoneNumber;
    public BlockedNumber withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
}