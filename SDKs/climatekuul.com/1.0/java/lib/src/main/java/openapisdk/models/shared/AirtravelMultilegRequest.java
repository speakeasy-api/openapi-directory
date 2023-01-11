package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AirtravelMultilegRequest {
    @JsonProperty("apiKey_l1")
    public String apiKeyL1;
    public AirtravelMultilegRequest withApiKeyL1(String apiKeyL1) {
        this.apiKeyL1 = apiKeyL1;
        return this;
    }
    @JsonProperty("apiKey_l2")
    public String apiKeyL2;
    public AirtravelMultilegRequest withApiKeyL2(String apiKeyL2) {
        this.apiKeyL2 = apiKeyL2;
        return this;
    }
    @JsonProperty("contactEmail")
    public String contactEmail;
    public AirtravelMultilegRequest withContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
        return this;
    }
    @JsonProperty("contactFirstName")
    public String contactFirstName;
    public AirtravelMultilegRequest withContactFirstName(String contactFirstName) {
        this.contactFirstName = contactFirstName;
        return this;
    }
    @JsonProperty("contactLastName")
    public String contactLastName;
    public AirtravelMultilegRequest withContactLastName(String contactLastName) {
        this.contactLastName = contactLastName;
        return this;
    }
    @JsonProperty("leg1")
    public Leg1 leg1;
    public AirtravelMultilegRequest withLeg1(Leg1 leg1) {
        this.leg1 = leg1;
        return this;
    }
    @JsonProperty("leg2")
    public Leg1 leg2;
    public AirtravelMultilegRequest withLeg2(Leg1 leg2) {
        this.leg2 = leg2;
        return this;
    }
    @JsonProperty("leg3")
    public Leg1 leg3;
    public AirtravelMultilegRequest withLeg3(Leg1 leg3) {
        this.leg3 = leg3;
        return this;
    }
    @JsonProperty("legs_count")
    public String legsCount;
    public AirtravelMultilegRequest withLegsCount(String legsCount) {
        this.legsCount = legsCount;
        return this;
    }
    @JsonProperty("number_of_passengers")
    public String numberOfPassengers;
    public AirtravelMultilegRequest withNumberOfPassengers(String numberOfPassengers) {
        this.numberOfPassengers = numberOfPassengers;
        return this;
    }
    @JsonProperty("travel_mode")
    public String travelMode;
    public AirtravelMultilegRequest withTravelMode(String travelMode) {
        this.travelMode = travelMode;
        return this;
    }
}