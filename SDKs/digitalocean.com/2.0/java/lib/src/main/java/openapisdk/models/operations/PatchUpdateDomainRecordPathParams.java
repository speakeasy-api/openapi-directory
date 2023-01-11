package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchUpdateDomainRecordPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=domain_name")
    public String domainName;
    public PatchUpdateDomainRecordPathParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=domain_record_id")
    public Long domainRecordId;
    public PatchUpdateDomainRecordPathParams withDomainRecordId(Long domainRecordId) {
        this.domainRecordId = domainRecordId;
        return this;
    }
}