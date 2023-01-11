package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;

public class VehHistory {
    @JsonProperty("dealerName")
    public String dealerName;
    public VehHistory withDealerName(String dealerName) {
        this.dealerName = dealerName;
        return this;
    }
    @JsonProperty("firstSeen")
    public LocalDate firstSeen;
    public VehHistory withFirstSeen(LocalDate firstSeen) {
        this.firstSeen = firstSeen;
        return this;
    }
    @JsonProperty("lastSeen")
    public LocalDate lastSeen;
    public VehHistory withLastSeen(LocalDate lastSeen) {
        this.lastSeen = lastSeen;
        return this;
    }
    @JsonProperty("miles")
    public Long miles;
    public VehHistory withMiles(Long miles) {
        this.miles = miles;
        return this;
    }
    @JsonProperty("new")
    public Boolean new_;
    public VehHistory withNew(Boolean new_) {
        this.new_ = new_;
        return this;
    }
    @JsonProperty("price")
    public Double price;
    public VehHistory withPrice(Double price) {
        this.price = price;
        return this;
    }
    @JsonProperty("state")
    public String state;
    public VehHistory withState(String state) {
        this.state = state;
        return this;
    }
    @JsonProperty("zip")
    public Long zip;
    public VehHistory withZip(Long zip) {
        this.zip = zip;
        return this;
    }
}