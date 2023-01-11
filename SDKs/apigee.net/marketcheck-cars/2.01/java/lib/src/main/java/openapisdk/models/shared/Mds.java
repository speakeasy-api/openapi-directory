package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Mds
 * Describes Market days supply results for year make model trim combination
**/
public class Mds {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("make")
    public String make;
    public Mds withMake(String make) {
        this.make = make;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mds")
    public Long mds;
    public Mds withMds(Long mds) {
        this.mds = mds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model")
    public String model;
    public Mds withModel(String model) {
        this.model = model;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sold_vins")
    public String[] soldVins;
    public Mds withSoldVins(String[] soldVins) {
        this.soldVins = soldVins;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_active_cars_for_ymmt")
    public Long totalActiveCarsForYmmt;
    public Mds withTotalActiveCarsForYmmt(Long totalActiveCarsForYmmt) {
        this.totalActiveCarsForYmmt = totalActiveCarsForYmmt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_cars_sold_in_last_45_days")
    public Long totalCarsSoldInLast45Days;
    public Mds withTotalCarsSoldInLast45Days(Long totalCarsSoldInLast45Days) {
        this.totalCarsSoldInLast45Days = totalCarsSoldInLast45Days;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trim")
    public String trim;
    public Mds withTrim(String trim) {
        this.trim = trim;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("year")
    public Long year;
    public Mds withYear(Long year) {
        this.year = year;
        return this;
    }
}