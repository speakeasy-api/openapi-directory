package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateProfileRequestBodyAddress
 * A generic address associated with the customer that is not mailing, shipping, or billing.
**/
public class CreateProfileRequestBodyAddress {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Address1")
    public String address1;
    public CreateProfileRequestBodyAddress withAddress1(String address1) {
        this.address1 = address1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Address2")
    public String address2;
    public CreateProfileRequestBodyAddress withAddress2(String address2) {
        this.address2 = address2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Address3")
    public String address3;
    public CreateProfileRequestBodyAddress withAddress3(String address3) {
        this.address3 = address3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Address4")
    public String address4;
    public CreateProfileRequestBodyAddress withAddress4(String address4) {
        this.address4 = address4;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("City")
    public String city;
    public CreateProfileRequestBodyAddress withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Country")
    public String country;
    public CreateProfileRequestBodyAddress withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("County")
    public String county;
    public CreateProfileRequestBodyAddress withCounty(String county) {
        this.county = county;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PostalCode")
    public String postalCode;
    public CreateProfileRequestBodyAddress withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Province")
    public String province;
    public CreateProfileRequestBodyAddress withProvince(String province) {
        this.province = province;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public String state;
    public CreateProfileRequestBodyAddress withState(String state) {
        this.state = state;
        return this;
    }
}