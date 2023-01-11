package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class PutReturnsRmaResponseV2ConsigneeV2 {
    @JsonProperty("address1")
    public String address1;
    public PutReturnsRmaResponseV2ConsigneeV2 withAddress1(String address1) {
        this.address1 = address1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address2")
    public String address2;
    public PutReturnsRmaResponseV2ConsigneeV2 withAddress2(String address2) {
        this.address2 = address2;
        return this;
    }
    @JsonProperty("addressLocality")
    public String addressLocality;
    public PutReturnsRmaResponseV2ConsigneeV2 withAddressLocality(String addressLocality) {
        this.addressLocality = addressLocality;
        return this;
    }
    @JsonProperty("addressRegion")
    public String addressRegion;
    public PutReturnsRmaResponseV2ConsigneeV2 withAddressRegion(String addressRegion) {
        this.addressRegion = addressRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("companyName")
    public String companyName;
    public PutReturnsRmaResponseV2ConsigneeV2 withCompanyName(String companyName) {
        this.companyName = companyName;
        return this;
    }
    @JsonProperty("country")
    public String country;
    public PutReturnsRmaResponseV2ConsigneeV2 withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public PutReturnsRmaResponseV2ConsigneeV2 withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("firstName")
    public String firstName;
    public PutReturnsRmaResponseV2ConsigneeV2 withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PutReturnsRmaResponseV2ConsigneeV2 withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iso")
    public PutReturnsRmaResponseV2ConsigneeV2IsoCountryV2 iso;
    public PutReturnsRmaResponseV2ConsigneeV2 withIso(PutReturnsRmaResponseV2ConsigneeV2IsoCountryV2 iso) {
        this.iso = iso;
        return this;
    }
    @JsonProperty("lastName")
    public String lastName;
    public PutReturnsRmaResponseV2ConsigneeV2 withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone")
    public String phone;
    public PutReturnsRmaResponseV2ConsigneeV2 withPhone(String phone) {
        this.phone = phone;
        return this;
    }
    @JsonProperty("postalCode")
    public String postalCode;
    public PutReturnsRmaResponseV2ConsigneeV2 withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updatedAt")
    public OffsetDateTime updatedAt;
    public PutReturnsRmaResponseV2ConsigneeV2 withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedBy")
    public openapisdk.models.shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy updatedBy;
    public PutReturnsRmaResponseV2ConsigneeV2 withUpdatedBy(openapisdk.models.shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy updatedBy) {
        this.updatedBy = updatedBy;
        return this;
    }
}