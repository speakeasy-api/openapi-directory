package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MotorcycleBuild
 * Describes the Motorcycle specification
**/
public class MotorcycleBuild {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body_type")
    public String bodyType;
    public MotorcycleBuild withBodyType(String bodyType) {
        this.bodyType = bodyType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cylinders")
    public Long cylinders;
    public MotorcycleBuild withCylinders(Long cylinders) {
        this.cylinders = cylinders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("drivetrain")
    public String drivetrain;
    public MotorcycleBuild withDrivetrain(String drivetrain) {
        this.drivetrain = drivetrain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dry_weight")
    public String dryWeight;
    public MotorcycleBuild withDryWeight(String dryWeight) {
        this.dryWeight = dryWeight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("engine")
    public String engine;
    public MotorcycleBuild withEngine(String engine) {
        this.engine = engine;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fuel_type")
    public String fuelType;
    public MotorcycleBuild withFuelType(String fuelType) {
        this.fuelType = fuelType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("made_in")
    public String madeIn;
    public MotorcycleBuild withMadeIn(String madeIn) {
        this.madeIn = madeIn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("make")
    public String make;
    public MotorcycleBuild withMake(String make) {
        this.make = make;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model")
    public String model;
    public MotorcycleBuild withModel(String model) {
        this.model = model;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transmission")
    public String transmission;
    public MotorcycleBuild withTransmission(String transmission) {
        this.transmission = transmission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trim")
    public String trim;
    public MotorcycleBuild withTrim(String trim) {
        this.trim = trim;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vehicle_type")
    public String vehicleType;
    public MotorcycleBuild withVehicleType(String vehicleType) {
        this.vehicleType = vehicleType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("year")
    public Long year;
    public MotorcycleBuild withYear(Long year) {
        this.year = year;
        return this;
    }
}