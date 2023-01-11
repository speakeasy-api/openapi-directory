package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CompanyInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountingEmails")
    public String[] accountingEmails;
    public CompanyInfo withAccountingEmails(String[] accountingEmails) {
        this.accountingEmails = accountingEmails;
        return this;
    }
    @JsonProperty("address")
    public String address;
    public CompanyInfo withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonProperty("city")
    public String city;
    public CompanyInfo withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonProperty("company")
    public String company;
    public CompanyInfo withCompany(String company) {
        this.company = company;
        return this;
    }
    @JsonProperty("countryIsoCodeAlpha3")
    public String countryIsoCodeAlpha3;
    public CompanyInfo withCountryIsoCodeAlpha3(String countryIsoCodeAlpha3) {
        this.countryIsoCodeAlpha3 = countryIsoCodeAlpha3;
        return this;
    }
    @JsonProperty("postalCode")
    public String postalCode;
    public CompanyInfo withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vatNumber")
    public String vatNumber;
    public CompanyInfo withVatNumber(String vatNumber) {
        this.vatNumber = vatNumber;
        return this;
    }
}