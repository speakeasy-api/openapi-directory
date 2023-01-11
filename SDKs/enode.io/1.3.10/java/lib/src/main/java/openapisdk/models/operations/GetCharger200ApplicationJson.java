package openapisdk.models.operations;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCharger200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeState")
    public GetCharger200ApplicationJsonChargeState chargeState;
    public GetCharger200ApplicationJson withChargeState(GetCharger200ApplicationJsonChargeState chargeState) {
        this.chargeState = chargeState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetCharger200ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("information")
    public GetCharger200ApplicationJsonInformation information;
    public GetCharger200ApplicationJson withInformation(GetCharger200ApplicationJsonInformation information) {
        this.information = information;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isReachable")
    public Boolean isReachable;
    public GetCharger200ApplicationJson withIsReachable(Boolean isReachable) {
        this.isReachable = isReachable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastSeen")
    public LocalDate lastSeen;
    public GetCharger200ApplicationJson withLastSeen(LocalDate lastSeen) {
        this.lastSeen = lastSeen;
        return this;
    }
}