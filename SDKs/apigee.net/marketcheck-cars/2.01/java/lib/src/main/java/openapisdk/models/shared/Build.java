package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Build
 * Describes the Car specification
**/
public class Build {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("antibrake_sys")
    public String antibrakeSys;
    public Build withAntibrakeSys(String antibrakeSys) {
        this.antibrakeSys = antibrakeSys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body_subtype")
    public String bodySubtype;
    public Build withBodySubtype(String bodySubtype) {
        this.bodySubtype = bodySubtype;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body_type")
    public String bodyType;
    public Build withBodyType(String bodyType) {
        this.bodyType = bodyType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city_miles")
    public String cityMiles;
    public Build withCityMiles(String cityMiles) {
        this.cityMiles = cityMiles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cylinders")
    public Long cylinders;
    public Build withCylinders(Long cylinders) {
        this.cylinders = cylinders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doors")
    public Long doors;
    public Build withDoors(Long doors) {
        this.doors = doors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("drivetrain")
    public String drivetrain;
    public Build withDrivetrain(String drivetrain) {
        this.drivetrain = drivetrain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("engine")
    public String engine;
    public Build withEngine(String engine) {
        this.engine = engine;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("engine_aspiration")
    public String engineAspiration;
    public Build withEngineAspiration(String engineAspiration) {
        this.engineAspiration = engineAspiration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("engine_block")
    public String engineBlock;
    public Build withEngineBlock(String engineBlock) {
        this.engineBlock = engineBlock;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("engine_measure")
    public String engineMeasure;
    public Build withEngineMeasure(String engineMeasure) {
        this.engineMeasure = engineMeasure;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("engine_size")
    public Double engineSize;
    public Build withEngineSize(Double engineSize) {
        this.engineSize = engineSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fuel_type")
    public String fuelType;
    public Build withFuelType(String fuelType) {
        this.fuelType = fuelType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("highway_miles")
    public String highwayMiles;
    public Build withHighwayMiles(String highwayMiles) {
        this.highwayMiles = highwayMiles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("made_in")
    public String madeIn;
    public Build withMadeIn(String madeIn) {
        this.madeIn = madeIn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("make")
    public String make;
    public Build withMake(String make) {
        this.make = make;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model")
    public String model;
    public Build withModel(String model) {
        this.model = model;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("opt_seating")
    public String optSeating;
    public Build withOptSeating(String optSeating) {
        this.optSeating = optSeating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overall_height")
    public String overallHeight;
    public Build withOverallHeight(String overallHeight) {
        this.overallHeight = overallHeight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overall_length")
    public String overallLength;
    public Build withOverallLength(String overallLength) {
        this.overallLength = overallLength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overall_width")
    public String overallWidth;
    public Build withOverallWidth(String overallWidth) {
        this.overallWidth = overallWidth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("short_trim")
    public String shortTrim;
    public Build withShortTrim(String shortTrim) {
        this.shortTrim = shortTrim;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("std_seating")
    public String stdSeating;
    public Build withStdSeating(String stdSeating) {
        this.stdSeating = stdSeating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("steering_type")
    public String steeringType;
    public Build withSteeringType(String steeringType) {
        this.steeringType = steeringType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tank_size")
    public String tankSize;
    public Build withTankSize(String tankSize) {
        this.tankSize = tankSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transmission")
    public String transmission;
    public Build withTransmission(String transmission) {
        this.transmission = transmission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trim")
    public String trim;
    public Build withTrim(String trim) {
        this.trim = trim;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trim_r")
    public String trimR;
    public Build withTrimR(String trimR) {
        this.trimR = trimR;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vehicle_type")
    public String vehicleType;
    public Build withVehicleType(String vehicleType) {
        this.vehicleType = vehicleType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("year")
    public Long year;
    public Build withYear(Long year) {
        this.year = year;
        return this;
    }
}