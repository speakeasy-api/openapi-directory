package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUpdateSynonymOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetUpdateSynonymOptionsActionEnum action;
    public GetUpdateSynonymOptionsQueryParams withAction(GetUpdateSynonymOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DomainName")
    public String domainName;
    public GetUpdateSynonymOptionsQueryParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Synonyms")
    public String synonyms;
    public GetUpdateSynonymOptionsQueryParams withSynonyms(String synonyms) {
        this.synonyms = synonyms;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetUpdateSynonymOptionsVersionEnum version;
    public GetUpdateSynonymOptionsQueryParams withVersion(GetUpdateSynonymOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}