package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDomainsTldZoneIdSearchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=A")
    public String a;
    public GetDomainsTldZoneIdSearchQueryParams withA(String a) {
        this.a = a;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CNAME")
    public String cname;
    public GetDomainsTldZoneIdSearchQueryParams withCname(String cname) {
        this.cname = cname;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MX")
    public String mx;
    public GetDomainsTldZoneIdSearchQueryParams withMx(String mx) {
        this.mx = mx;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NS")
    public String ns;
    public GetDomainsTldZoneIdSearchQueryParams withNs(String ns) {
        this.ns = ns;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TXT")
    public String txt;
    public GetDomainsTldZoneIdSearchQueryParams withTxt(String txt) {
        this.txt = txt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetDomainsTldZoneIdSearchQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country")
    public String country;
    public GetDomainsTldZoneIdSearchQueryParams withCountry(String country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date")
    public String date;
    public GetDomainsTldZoneIdSearchQueryParams withDate(String date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=domain")
    public String domain;
    public GetDomainsTldZoneIdSearchQueryParams withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=isDead")
    public Boolean isDead;
    public GetDomainsTldZoneIdSearchQueryParams withIsDead(Boolean isDead) {
        this.isDead = isDead;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetDomainsTldZoneIdSearchQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public String page;
    public GetDomainsTldZoneIdSearchQueryParams withPage(String page) {
        this.page = page;
        return this;
    }
}