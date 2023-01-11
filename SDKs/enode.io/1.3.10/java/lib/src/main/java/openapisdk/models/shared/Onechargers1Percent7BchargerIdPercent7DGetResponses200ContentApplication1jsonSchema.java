package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchema {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeState")
    public Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemaChargeState chargeState;
    public Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchema withChargeState(Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemaChargeState chargeState) {
        this.chargeState = chargeState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchema withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("information")
    public Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemaInformation information;
    public Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchema withInformation(Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemaInformation information) {
        this.information = information;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isReachable")
    public Boolean isReachable;
    public Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchema withIsReachable(Boolean isReachable) {
        this.isReachable = isReachable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastSeen")
    public LocalDate lastSeen;
    public Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchema withLastSeen(LocalDate lastSeen) {
        this.lastSeen = lastSeen;
        return this;
    }
}