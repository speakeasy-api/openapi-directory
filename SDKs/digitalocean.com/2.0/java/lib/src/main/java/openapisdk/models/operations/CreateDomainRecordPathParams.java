package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDomainRecordPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=domain_name")
    public String domainName;
    public CreateDomainRecordPathParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}