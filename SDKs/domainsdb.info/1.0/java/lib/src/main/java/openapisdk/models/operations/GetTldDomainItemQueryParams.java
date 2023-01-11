package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTldDomainItemQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=A")
    public String a;
    public GetTldDomainItemQueryParams withA(String a) {
        this.a = a;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CNAME")
    public String cname;
    public GetTldDomainItemQueryParams withCname(String cname) {
        this.cname = cname;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MX")
    public String mx;
    public GetTldDomainItemQueryParams withMx(String mx) {
        this.mx = mx;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NS")
    public String ns;
    public GetTldDomainItemQueryParams withNs(String ns) {
        this.ns = ns;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TXT")
    public String txt;
    public GetTldDomainItemQueryParams withTxt(String txt) {
        this.txt = txt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetTldDomainItemQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country")
    public String country;
    public GetTldDomainItemQueryParams withCountry(String country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date")
    public String date;
    public GetTldDomainItemQueryParams withDate(String date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=domain")
    public String domain;
    public GetTldDomainItemQueryParams withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=isDead")
    public Boolean isDead;
    public GetTldDomainItemQueryParams withIsDead(Boolean isDead) {
        this.isDead = isDead;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetTldDomainItemQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public String page;
    public GetTldDomainItemQueryParams withPage(String page) {
        this.page = page;
        return this;
    }
}