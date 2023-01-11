package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetOrder200ApplicationJsonOrderResponseV2TrackingNumbersCarrierHydratedV2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canReprintPostage")
    public Boolean canReprintPostage;
    public GetOrder200ApplicationJsonOrderResponseV2TrackingNumbersCarrierHydratedV2 withCanReprintPostage(Boolean canReprintPostage) {
        this.canReprintPostage = canReprintPostage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public GetOrder200ApplicationJsonOrderResponseV2TrackingNumbersCarrierHydratedV2 withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetOrder200ApplicationJsonOrderResponseV2TrackingNumbersCarrierHydratedV2 withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includePeripherals")
    public Boolean includePeripherals;
    public GetOrder200ApplicationJsonOrderResponseV2TrackingNumbersCarrierHydratedV2 withIncludePeripherals(Boolean includePeripherals) {
        this.includePeripherals = includePeripherals;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("internalRatesOnly")
    public Boolean internalRatesOnly;
    public GetOrder200ApplicationJsonOrderResponseV2TrackingNumbersCarrierHydratedV2 withInternalRatesOnly(Boolean internalRatesOnly) {
        this.internalRatesOnly = internalRatesOnly;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetOrder200ApplicationJsonOrderResponseV2TrackingNumbersCarrierHydratedV2 withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requiresDimensions")
    public Boolean requiresDimensions;
    public GetOrder200ApplicationJsonOrderResponseV2TrackingNumbersCarrierHydratedV2 withRequiresDimensions(Boolean requiresDimensions) {
        this.requiresDimensions = requiresDimensions;
        return this;
    }
    @JsonProperty("symbol")
    public String symbol;
    public GetOrder200ApplicationJsonOrderResponseV2TrackingNumbersCarrierHydratedV2 withSymbol(String symbol) {
        this.symbol = symbol;
        return this;
    }
}