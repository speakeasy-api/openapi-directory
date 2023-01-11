package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Leg1 {
    @JsonProperty("destination_airport_code")
    public String destinationAirportCode;
    public Leg1 withDestinationAirportCode(String destinationAirportCode) {
        this.destinationAirportCode = destinationAirportCode;
        return this;
    }
    @JsonProperty("origin_airport_code")
    public String originAirportCode;
    public Leg1 withOriginAirportCode(String originAirportCode) {
        this.originAirportCode = originAirportCode;
        return this;
    }
    @JsonProperty("travel_class")
    public String travelClass;
    public Leg1 withTravelClass(String travelClass) {
        this.travelClass = travelClass;
        return this;
    }
}