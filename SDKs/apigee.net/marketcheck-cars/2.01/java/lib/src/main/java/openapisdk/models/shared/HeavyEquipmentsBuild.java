package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HeavyEquipmentsBuild
 * Describes the Heavy Equipments specification
**/
public class HeavyEquipmentsBuild {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body_type")
    public String bodyType;
    public HeavyEquipmentsBuild withBodyType(String bodyType) {
        this.bodyType = bodyType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public String category;
    public HeavyEquipmentsBuild withCategory(String category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("condition")
    public String condition;
    public HeavyEquipmentsBuild withCondition(String condition) {
        this.condition = condition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("drivetrain")
    public String drivetrain;
    public HeavyEquipmentsBuild withDrivetrain(String drivetrain) {
        this.drivetrain = drivetrain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("engine")
    public String engine;
    public HeavyEquipmentsBuild withEngine(String engine) {
        this.engine = engine;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fuel_type")
    public String fuelType;
    public HeavyEquipmentsBuild withFuelType(String fuelType) {
        this.fuelType = fuelType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("make")
    public String make;
    public HeavyEquipmentsBuild withMake(String make) {
        this.make = make;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model")
    public String model;
    public HeavyEquipmentsBuild withModel(String model) {
        this.model = model;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sub_category")
    public String subCategory;
    public HeavyEquipmentsBuild withSubCategory(String subCategory) {
        this.subCategory = subCategory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transmission")
    public String transmission;
    public HeavyEquipmentsBuild withTransmission(String transmission) {
        this.transmission = transmission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trim")
    public String trim;
    public HeavyEquipmentsBuild withTrim(String trim) {
        this.trim = trim;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("year")
    public Long year;
    public HeavyEquipmentsBuild withYear(Long year) {
        this.year = year;
        return this;
    }
}