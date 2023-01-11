package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreditCardInfoResponseLinks
 * The different actions you can make on this offer
**/
public class CreditCardInfoResponseLinks {
    @JsonProperty("saveCreditCardInfo")
    public LinksSaveCreditCardInfoLink saveCreditCardInfo;
    public CreditCardInfoResponseLinks withSaveCreditCardInfo(LinksSaveCreditCardInfoLink saveCreditCardInfo) {
        this.saveCreditCardInfo = saveCreditCardInfo;
        return this;
    }
    @JsonProperty("self")
    public LinksGetCreditCardInfoLink self;
    public CreditCardInfoResponseLinks withSelf(LinksGetCreditCardInfoLink self) {
        this.self = self;
        return this;
    }
}