package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompanyAlternativeSearchRequestBody {
    @SpeakeasyMetadata("form:name=address")
    public String address;
    public CompanyAlternativeSearchRequestBody withAddress(String address) {
        this.address = address;
        return this;
    }
    @SpeakeasyMetadata("form:name=name")
    public String name;
    public CompanyAlternativeSearchRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("form:name=number")
    public String number;
    public CompanyAlternativeSearchRequestBody withNumber(String number) {
        this.number = number;
        return this;
    }
    @SpeakeasyMetadata("form:name=phone")
    public String phone;
    public CompanyAlternativeSearchRequestBody withPhone(String phone) {
        this.phone = phone;
        return this;
    }
    @SpeakeasyMetadata("form:name=url")
    public String url;
    public CompanyAlternativeSearchRequestBody withUrl(String url) {
        this.url = url;
        return this;
    }
    @SpeakeasyMetadata("form:name=vat")
    public String vat;
    public CompanyAlternativeSearchRequestBody withVat(String vat) {
        this.vat = vat;
        return this;
    }
}