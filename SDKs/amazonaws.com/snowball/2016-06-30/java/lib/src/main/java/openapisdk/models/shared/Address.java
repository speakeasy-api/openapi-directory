package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Address
 * The address that you want the Snow device(s) associated with a specific job to be shipped to. Addresses are validated at the time of creation. The address you provide must be located within the serviceable area of your region. Although no individual elements of the <code>Address</code> are required, if the address is invalid or unsupported, then an exception is thrown.
**/
public class Address {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AddressId")
    public String addressId;
    public Address withAddressId(String addressId) {
        this.addressId = addressId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("City")
    public String city;
    public Address withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Company")
    public String company;
    public Address withCompany(String company) {
        this.company = company;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Country")
    public String country;
    public Address withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsRestricted")
    public Boolean isRestricted;
    public Address withIsRestricted(Boolean isRestricted) {
        this.isRestricted = isRestricted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Landmark")
    public String landmark;
    public Address withLandmark(String landmark) {
        this.landmark = landmark;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public Address withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PhoneNumber")
    public String phoneNumber;
    public Address withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PostalCode")
    public String postalCode;
    public Address withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PrefectureOrDistrict")
    public String prefectureOrDistrict;
    public Address withPrefectureOrDistrict(String prefectureOrDistrict) {
        this.prefectureOrDistrict = prefectureOrDistrict;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StateOrProvince")
    public String stateOrProvince;
    public Address withStateOrProvince(String stateOrProvince) {
        this.stateOrProvince = stateOrProvince;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Street1")
    public String street1;
    public Address withStreet1(String street1) {
        this.street1 = street1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Street2")
    public String street2;
    public Address withStreet2(String street2) {
        this.street2 = street2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Street3")
    public String street3;
    public Address withStreet3(String street3) {
        this.street3 = street3;
        return this;
    }
}