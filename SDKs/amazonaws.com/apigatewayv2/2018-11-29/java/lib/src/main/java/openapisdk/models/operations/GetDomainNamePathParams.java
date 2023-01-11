package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDomainNamePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=domainName")
    public String domainName;
    public GetDomainNamePathParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}