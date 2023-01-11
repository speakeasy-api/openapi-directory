package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Listing {
    @JsonProperty("askPrice")
    public Double askPrice;
    public Listing withAskPrice(Double askPrice) {
        this.askPrice = askPrice;
        return this;
    }
    @JsonProperty("brandName")
    public String brandName;
    public Listing withBrandName(String brandName) {
        this.brandName = brandName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public String color;
    public Listing withColor(String color) {
        this.color = color;
        return this;
    }
    @JsonProperty("dealerID")
    public Long dealerID;
    public Listing withDealerId(Long dealerID) {
        this.dealerID = dealerID;
        return this;
    }
    @JsonProperty("firstSeen")
    public LocalDate firstSeen;
    public Listing withFirstSeen(LocalDate firstSeen) {
        this.firstSeen = firstSeen;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interiorColor")
    public String interiorColor;
    public Listing withInteriorColor(String interiorColor) {
        this.interiorColor = interiorColor;
        return this;
    }
    @JsonProperty("isNew")
    public Boolean isNew;
    public Listing withIsNew(Boolean isNew) {
        this.isNew = isNew;
        return this;
    }
    @JsonProperty("lastSeen")
    public LocalDate lastSeen;
    public Listing withLastSeen(LocalDate lastSeen) {
        this.lastSeen = lastSeen;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mileage")
    public Double mileage;
    public Listing withMileage(Double mileage) {
        this.mileage = mileage;
        return this;
    }
    @JsonProperty("modelName")
    public String modelName;
    public Listing withModelName(String modelName) {
        this.modelName = modelName;
        return this;
    }
    @JsonProperty("msrp")
    public Double msrp;
    public Listing withMsrp(Double msrp) {
        this.msrp = msrp;
        return this;
    }
    @JsonProperty("vin")
    public String vin;
    public Listing withVin(String vin) {
        this.vin = vin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vinDecode")
    public java.util.Map<String, Object> vinDecode;
    public Listing withVinDecode(java.util.Map<String, Object> vinDecode) {
        this.vinDecode = vinDecode;
        return this;
    }
    @JsonProperty("year")
    public Double year;
    public Listing withYear(Double year) {
        this.year = year;
        return this;
    }
}