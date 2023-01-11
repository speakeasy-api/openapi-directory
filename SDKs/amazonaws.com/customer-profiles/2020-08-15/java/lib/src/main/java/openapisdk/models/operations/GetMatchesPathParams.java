package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMatchesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DomainName")
    public String domainName;
    public GetMatchesPathParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}