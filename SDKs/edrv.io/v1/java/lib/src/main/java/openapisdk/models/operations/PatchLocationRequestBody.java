package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PatchLocationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public PatchLocationRequestBody withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public PatchLocationRequestBodyAddress address;
    public PatchLocationRequestBody withAddress(PatchLocationRequestBodyAddress address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargestations")
    public Object[] chargestations;
    public PatchLocationRequestBody withChargestations(Object[] chargestations) {
        this.chargestations = chargestations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coordinates")
    public PatchLocationRequestBodyCoordinates coordinates;
    public PatchLocationRequestBody withCoordinates(PatchLocationRequestBodyCoordinates coordinates) {
        this.coordinates = coordinates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("openingHours")
    public PatchLocationRequestBodyOpeningHours openingHours;
    public PatchLocationRequestBody withOpeningHours(PatchLocationRequestBodyOpeningHours openingHours) {
        this.openingHours = openingHours;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operatorName")
    public String operatorName;
    public PatchLocationRequestBody withOperatorName(String operatorName) {
        this.operatorName = operatorName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezone")
    public String timezone;
    public PatchLocationRequestBody withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
}