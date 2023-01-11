package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EbayCollectAndRemitTax
 * This type contains information about the type and amount of tax that eBay will collect and remit to the state, province, country, or other taxing authority in the buyer's location, as required by that taxing authority. 'Collect and Remit' tax includes US state-mandated sales tax, 'Goods and Services' tax in Australia or New Zealand, VAT collected for the UK and EU countries.
**/
public class EbayCollectAndRemitTax {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Amount amount;
    public EbayCollectAndRemitTax withAmount(Amount amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collectionMethod")
    public String collectionMethod;
    public EbayCollectAndRemitTax withCollectionMethod(String collectionMethod) {
        this.collectionMethod = collectionMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ebayReference")
    public EbayTaxReference ebayReference;
    public EbayCollectAndRemitTax withEbayReference(EbayTaxReference ebayReference) {
        this.ebayReference = ebayReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxType")
    public String taxType;
    public EbayCollectAndRemitTax withTaxType(String taxType) {
        this.taxType = taxType;
        return this;
    }
}