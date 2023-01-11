package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TravelCenterOpeningTimes
 * Opening times of the travel center, ordered by week day
**/
public class TravelCenterOpeningTimes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fri")
    public String[] fri;
    public TravelCenterOpeningTimes withFri(String[] fri) {
        this.fri = fri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mon")
    public String[] mon;
    public TravelCenterOpeningTimes withMon(String[] mon) {
        this.mon = mon;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sat")
    public String[] sat;
    public TravelCenterOpeningTimes withSat(String[] sat) {
        this.sat = sat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sun")
    public String[] sun;
    public TravelCenterOpeningTimes withSun(String[] sun) {
        this.sun = sun;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thu")
    public String[] thu;
    public TravelCenterOpeningTimes withThu(String[] thu) {
        this.thu = thu;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tue")
    public String[] tue;
    public TravelCenterOpeningTimes withTue(String[] tue) {
        this.tue = tue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wed")
    public String[] wed;
    public TravelCenterOpeningTimes withWed(String[] wed) {
        this.wed = wed;
        return this;
    }
}