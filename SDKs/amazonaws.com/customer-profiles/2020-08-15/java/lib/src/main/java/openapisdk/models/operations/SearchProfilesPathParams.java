package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchProfilesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DomainName")
    public String domainName;
    public SearchProfilesPathParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}