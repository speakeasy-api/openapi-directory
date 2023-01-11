package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateProfileRequestBodyBillingAddress
 * A generic address associated with the customer that is not mailing, shipping, or billing.
**/
public class CreateProfileRequestBodyBillingAddress {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Address1")
    public String address1;
    public CreateProfileRequestBodyBillingAddress withAddress1(String address1) {
        this.address1 = address1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Address2")
    public String address2;
    public CreateProfileRequestBodyBillingAddress withAddress2(String address2) {
        this.address2 = address2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Address3")
    public String address3;
    public CreateProfileRequestBodyBillingAddress withAddress3(String address3) {
        this.address3 = address3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Address4")
    public String address4;
    public CreateProfileRequestBodyBillingAddress withAddress4(String address4) {
        this.address4 = address4;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("City")
    public String city;
    public CreateProfileRequestBodyBillingAddress withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Country")
    public String country;
    public CreateProfileRequestBodyBillingAddress withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("County")
    public String county;
    public CreateProfileRequestBodyBillingAddress withCounty(String county) {
        this.county = county;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PostalCode")
    public String postalCode;
    public CreateProfileRequestBodyBillingAddress withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Province")
    public String province;
    public CreateProfileRequestBodyBillingAddress withProvince(String province) {
        this.province = province;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public String state;
    public CreateProfileRequestBodyBillingAddress withState(String state) {
        this.state = state;
        return this;
    }
}