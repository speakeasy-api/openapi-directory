package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAllDomainRecordsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=domain_name")
    public String domainName;
    public ListAllDomainRecordsPathParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}