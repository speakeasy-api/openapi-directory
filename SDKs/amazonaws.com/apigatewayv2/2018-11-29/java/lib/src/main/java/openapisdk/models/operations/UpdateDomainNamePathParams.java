package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDomainNamePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=domainName")
    public String domainName;
    public UpdateDomainNamePathParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}