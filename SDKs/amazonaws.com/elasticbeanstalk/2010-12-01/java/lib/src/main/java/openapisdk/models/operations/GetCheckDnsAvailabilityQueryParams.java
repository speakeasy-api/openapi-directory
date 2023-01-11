package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCheckDnsAvailabilityQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCheckDnsAvailabilityActionEnum action;
    public GetCheckDnsAvailabilityQueryParams withAction(GetCheckDnsAvailabilityActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CNAMEPrefix")
    public String cnamePrefix;
    public GetCheckDnsAvailabilityQueryParams withCnamePrefix(String cnamePrefix) {
        this.cnamePrefix = cnamePrefix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCheckDnsAvailabilityVersionEnum version;
    public GetCheckDnsAvailabilityQueryParams withVersion(GetCheckDnsAvailabilityVersionEnum version) {
        this.version = version;
        return this;
    }
}