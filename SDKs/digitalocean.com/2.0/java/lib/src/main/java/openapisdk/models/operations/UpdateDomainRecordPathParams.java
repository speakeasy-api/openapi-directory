package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDomainRecordPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=domain_name")
    public String domainName;
    public UpdateDomainRecordPathParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=domain_record_id")
    public Long domainRecordId;
    public UpdateDomainRecordPathParams withDomainRecordId(Long domainRecordId) {
        this.domainRecordId = domainRecordId;
        return this;
    }
}