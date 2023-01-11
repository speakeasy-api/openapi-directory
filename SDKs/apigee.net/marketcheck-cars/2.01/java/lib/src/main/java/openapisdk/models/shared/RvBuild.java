package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RvBuild
 * Describes the RV specification
**/
public class RvBuild {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("area")
    public String area;
    public RvBuild withArea(String area) {
        this.area = area;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("class")
    public String class_;
    public RvBuild withClass(String class_) {
        this.class_ = class_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("engine")
    public String engine;
    public RvBuild withEngine(String engine) {
        this.engine = engine;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fuel_type")
    public String fuelType;
    public RvBuild withFuelType(String fuelType) {
        this.fuelType = fuelType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gvwr")
    public String gvwr;
    public RvBuild withGvwr(String gvwr) {
        this.gvwr = gvwr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("length")
    public String length;
    public RvBuild withLength(String length) {
        this.length = length;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("made_in")
    public String madeIn;
    public RvBuild withMadeIn(String madeIn) {
        this.madeIn = madeIn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("make")
    public String make;
    public RvBuild withMake(String make) {
        this.make = make;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model")
    public String model;
    public RvBuild withModel(String model) {
        this.model = model;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sleeps")
    public String sleeps;
    public RvBuild withSleeps(String sleeps) {
        this.sleeps = sleeps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slideouts")
    public String slideouts;
    public RvBuild withSlideouts(String slideouts) {
        this.slideouts = slideouts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transmission")
    public String transmission;
    public RvBuild withTransmission(String transmission) {
        this.transmission = transmission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("year")
    public Long year;
    public RvBuild withYear(Long year) {
        this.year = year;
        return this;
    }
}