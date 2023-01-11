package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListingNestExtraAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dealer_added_f")
    public String[] dealerAddedF;
    public ListingNestExtraAttributes withDealerAddedF(String[] dealerAddedF) {
        this.dealerAddedF = dealerAddedF;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("electronics_f")
    public String[] electronicsF;
    public ListingNestExtraAttributes withElectronicsF(String[] electronicsF) {
        this.electronicsF = electronicsF;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exterior_f")
    public String[] exteriorF;
    public ListingNestExtraAttributes withExteriorF(String[] exteriorF) {
        this.exteriorF = exteriorF;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("features")
    public String[] features;
    public ListingNestExtraAttributes withFeatures(String[] features) {
        this.features = features;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interior_f")
    public String[] interiorF;
    public ListingNestExtraAttributes withInteriorF(String[] interiorF) {
        this.interiorF = interiorF;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public String[] options;
    public ListingNestExtraAttributes withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("safety_f")
    public String[] safetyF;
    public ListingNestExtraAttributes withSafetyF(String[] safetyF) {
        this.safetyF = safetyF;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seller_comments")
    public String sellerComments;
    public ListingNestExtraAttributes withSellerComments(String sellerComments) {
        this.sellerComments = sellerComments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("standard_f")
    public String[] standardF;
    public ListingNestExtraAttributes withStandardF(String[] standardF) {
        this.standardF = standardF;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("technical_f")
    public String[] technicalF;
    public ListingNestExtraAttributes withTechnicalF(String[] technicalF) {
        this.technicalF = technicalF;
        return this;
    }
}