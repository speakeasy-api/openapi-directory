package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CancelreservationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservation")
    public String reservation;
    public CancelreservationRequestBody withReservation(String reservation) {
        this.reservation = reservation;
        return this;
    }
}