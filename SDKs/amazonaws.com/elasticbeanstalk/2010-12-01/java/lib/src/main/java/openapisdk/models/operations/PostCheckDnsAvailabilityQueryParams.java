package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCheckDnsAvailabilityQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCheckDnsAvailabilityActionEnum action;
    public PostCheckDnsAvailabilityQueryParams withAction(PostCheckDnsAvailabilityActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCheckDnsAvailabilityVersionEnum version;
    public PostCheckDnsAvailabilityQueryParams withVersion(PostCheckDnsAvailabilityVersionEnum version) {
        this.version = version;
        return this;
    }
}