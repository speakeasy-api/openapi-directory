package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteSuggesterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteSuggesterActionEnum action;
    public GetDeleteSuggesterQueryParams withAction(GetDeleteSuggesterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DomainName")
    public String domainName;
    public GetDeleteSuggesterQueryParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SuggesterName")
    public String suggesterName;
    public GetDeleteSuggesterQueryParams withSuggesterName(String suggesterName) {
        this.suggesterName = suggesterName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteSuggesterVersionEnum version;
    public GetDeleteSuggesterQueryParams withVersion(GetDeleteSuggesterVersionEnum version) {
        this.version = version;
        return this;
    }
}