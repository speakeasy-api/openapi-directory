package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetInvoiceSummaryByUuid200ApplicationJsonUserBillingAddress
 * The billing address of the customer being invoiced.
**/
public class GetInvoiceSummaryByUuid200ApplicationJsonUserBillingAddress {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address_line1")
    public String addressLine1;
    public GetInvoiceSummaryByUuid200ApplicationJsonUserBillingAddress withAddressLine1(String addressLine1) {
        this.addressLine1 = addressLine1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address_line2")
    public String addressLine2;
    public GetInvoiceSummaryByUuid200ApplicationJsonUserBillingAddress withAddressLine2(String addressLine2) {
        this.addressLine2 = addressLine2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public GetInvoiceSummaryByUuid200ApplicationJsonUserBillingAddress withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country_iso2_code")
    public String countryIso2Code;
    public GetInvoiceSummaryByUuid200ApplicationJsonUserBillingAddress withCountryIso2Code(String countryIso2Code) {
        this.countryIso2Code = countryIso2Code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public String createdAt;
    public GetInvoiceSummaryByUuid200ApplicationJsonUserBillingAddress withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postal_code")
    public String postalCode;
    public GetInvoiceSummaryByUuid200ApplicationJsonUserBillingAddress withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public GetInvoiceSummaryByUuid200ApplicationJsonUserBillingAddress withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_at")
    public String updatedAt;
    public GetInvoiceSummaryByUuid200ApplicationJsonUserBillingAddress withUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}