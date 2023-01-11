package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Address {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public Address withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contact_name")
    public String contactName;
    public Address withContactName(String contactName) {
        this.contactName = contactName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public Address withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("county")
    public String county;
    public Address withCounty(String county) {
        this.county = county;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public Address withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fax")
    public String fax;
    public Address withFax(String fax) {
        this.fax = fax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Address withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latitude")
    public String latitude;
    public Address withLatitude(String latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line1")
    public String line1;
    public Address withLine1(String line1) {
        this.line1 = line1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line2")
    public String line2;
    public Address withLine2(String line2) {
        this.line2 = line2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line3")
    public String line3;
    public Address withLine3(String line3) {
        this.line3 = line3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line4")
    public String line4;
    public Address withLine4(String line4) {
        this.line4 = line4;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longitude")
    public String longitude;
    public Address withLongitude(String longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Address withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_number")
    public String phoneNumber;
    public Address withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postal_code")
    public String postalCode;
    public Address withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("row_version")
    public String rowVersion;
    public Address withRowVersion(String rowVersion) {
        this.rowVersion = rowVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("salutation")
    public String salutation;
    public Address withSalutation(String salutation) {
        this.salutation = salutation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public Address withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("street_number")
    public String streetNumber;
    public Address withStreetNumber(String streetNumber) {
        this.streetNumber = streetNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("string")
    public String string;
    public Address withString(String string) {
        this.string = string;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public AddressTypeEnum type;
    public Address withType(AddressTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("website")
    public String website;
    public Address withWebsite(String website) {
        this.website = website;
        return this;
    }
}