package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDomainRecordPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=domain_name")
    public String domainName;
    public GetDomainRecordPathParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=domain_record_id")
    public Long domainRecordId;
    public GetDomainRecordPathParams withDomainRecordId(Long domainRecordId) {
        this.domainRecordId = domainRecordId;
        return this;
    }
}