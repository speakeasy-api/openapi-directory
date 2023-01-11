package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUpdateStopwordOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetUpdateStopwordOptionsActionEnum action;
    public GetUpdateStopwordOptionsQueryParams withAction(GetUpdateStopwordOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DomainName")
    public String domainName;
    public GetUpdateStopwordOptionsQueryParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Stopwords")
    public String stopwords;
    public GetUpdateStopwordOptionsQueryParams withStopwords(String stopwords) {
        this.stopwords = stopwords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetUpdateStopwordOptionsVersionEnum version;
    public GetUpdateStopwordOptionsQueryParams withVersion(GetUpdateStopwordOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}