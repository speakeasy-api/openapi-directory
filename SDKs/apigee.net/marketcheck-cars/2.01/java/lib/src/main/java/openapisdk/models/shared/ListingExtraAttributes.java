package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListingExtraAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dealer_added_f")
    public String[] dealerAddedF;
    public ListingExtraAttributes withDealerAddedF(String[] dealerAddedF) {
        this.dealerAddedF = dealerAddedF;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("electronics_f")
    public String[] electronicsF;
    public ListingExtraAttributes withElectronicsF(String[] electronicsF) {
        this.electronicsF = electronicsF;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exterior_f")
    public String[] exteriorF;
    public ListingExtraAttributes withExteriorF(String[] exteriorF) {
        this.exteriorF = exteriorF;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("features")
    public String[] features;
    public ListingExtraAttributes withFeatures(String[] features) {
        this.features = features;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ListingExtraAttributes withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interior_f")
    public String[] interiorF;
    public ListingExtraAttributes withInteriorF(String[] interiorF) {
        this.interiorF = interiorF;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public String[] options;
    public ListingExtraAttributes withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("safety_f")
    public String[] safetyF;
    public ListingExtraAttributes withSafetyF(String[] safetyF) {
        this.safetyF = safetyF;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seller_cmts")
    public String sellerCmts;
    public ListingExtraAttributes withSellerCmts(String sellerCmts) {
        this.sellerCmts = sellerCmts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("standard_f")
    public String[] standardF;
    public ListingExtraAttributes withStandardF(String[] standardF) {
        this.standardF = standardF;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("technical_f")
    public String[] technicalF;
    public ListingExtraAttributes withTechnicalF(String[] technicalF) {
        this.technicalF = technicalF;
        return this;
    }
}