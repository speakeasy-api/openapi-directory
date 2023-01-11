package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CustomerIndexLovLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activeOfferLov")
    public BeezUpCommonLovLink3 activeOfferLov;
    public CustomerIndexLovLinks withActiveOfferLov(BeezUpCommonLovLink3 activeOfferLov) {
        this.activeOfferLov = activeOfferLov;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("beezUPTimeZoneLov")
    public BeezUpCommonLovLink3 beezUPTimeZoneLov;
    public CustomerIndexLovLinks withBeezUpTimeZoneLov(BeezUpCommonLovLink3 beezUPTimeZoneLov) {
        this.beezUPTimeZoneLov = beezUPTimeZoneLov;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contractTerminationReasonLov")
    public BeezUpCommonLovLink3 contractTerminationReasonLov;
    public CustomerIndexLovLinks withContractTerminationReasonLov(BeezUpCommonLovLink3 contractTerminationReasonLov) {
        this.contractTerminationReasonLov = contractTerminationReasonLov;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countryLov")
    public BeezUpCommonLovLink3 countryLov;
    public CustomerIndexLovLinks withCountryLov(BeezUpCommonLovLink3 countryLov) {
        this.countryLov = countryLov;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerStatusLov")
    public BeezUpCommonLovLink3 customerStatusLov;
    public CustomerIndexLovLinks withCustomerStatusLov(BeezUpCommonLovLink3 customerStatusLov) {
        this.customerStatusLov = customerStatusLov;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoicePaymentStatusLov")
    public BeezUpCommonLovLink3 invoicePaymentStatusLov;
    public CustomerIndexLovLinks withInvoicePaymentStatusLov(BeezUpCommonLovLink3 invoicePaymentStatusLov) {
        this.invoicePaymentStatusLov = invoicePaymentStatusLov;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offerLov")
    public BeezUpCommonLovLink3 offerLov;
    public CustomerIndexLovLinks withOfferLov(BeezUpCommonLovLink3 offerLov) {
        this.offerLov = offerLov;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storeCountryLov")
    public BeezUpCommonLovLink3 storeCountryLov;
    public CustomerIndexLovLinks withStoreCountryLov(BeezUpCommonLovLink3 storeCountryLov) {
        this.storeCountryLov = storeCountryLov;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storeSectorLov")
    public BeezUpCommonLovLink3 storeSectorLov;
    public CustomerIndexLovLinks withStoreSectorLov(BeezUpCommonLovLink3 storeSectorLov) {
        this.storeSectorLov = storeSectorLov;
        return this;
    }
}