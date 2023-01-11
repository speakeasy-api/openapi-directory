package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDomainRecordPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=domain_name")
    public String domainName;
    public DeleteDomainRecordPathParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=domain_record_id")
    public Long domainRecordId;
    public DeleteDomainRecordPathParams withDomainRecordId(Long domainRecordId) {
        this.domainRecordId = domainRecordId;
        return this;
    }
}