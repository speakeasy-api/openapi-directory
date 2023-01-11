package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Onevehicles1Percent7BvehicleIdPercent7D1informationGetResponses200ContentApplication1jsonSchema
 * Descriptive information about the Vehicle
**/
public class Onevehicles1Percent7BvehicleIdPercent7D1informationGetResponses200ContentApplication1jsonSchema {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brand")
    public String brand;
    public Onevehicles1Percent7BvehicleIdPercent7D1informationGetResponses200ContentApplication1jsonSchema withBrand(String brand) {
        this.brand = brand;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Onevehicles1Percent7BvehicleIdPercent7D1informationGetResponses200ContentApplication1jsonSchema withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model")
    public String model;
    public Onevehicles1Percent7BvehicleIdPercent7D1informationGetResponses200ContentApplication1jsonSchema withModel(String model) {
        this.model = model;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("year")
    public Long year;
    public Onevehicles1Percent7BvehicleIdPercent7D1informationGetResponses200ContentApplication1jsonSchema withYear(Long year) {
        this.year = year;
        return this;
    }
}