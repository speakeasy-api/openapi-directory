package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDomainPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=domain_name")
    public String domainName;
    public GetDomainPathParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}