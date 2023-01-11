package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModifyInstanceMetadataOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetModifyInstanceMetadataOptionsActionEnum action;
    public GetModifyInstanceMetadataOptionsQueryParams withAction(GetModifyInstanceMetadataOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetModifyInstanceMetadataOptionsQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=HttpEndpoint")
    public GetModifyInstanceMetadataOptionsHttpEndpointEnum httpEndpoint;
    public GetModifyInstanceMetadataOptionsQueryParams withHttpEndpoint(GetModifyInstanceMetadataOptionsHttpEndpointEnum httpEndpoint) {
        this.httpEndpoint = httpEndpoint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=HttpProtocolIpv6")
    public GetModifyInstanceMetadataOptionsHttpProtocolIpv6Enum httpProtocolIpv6;
    public GetModifyInstanceMetadataOptionsQueryParams withHttpProtocolIpv6(GetModifyInstanceMetadataOptionsHttpProtocolIpv6Enum httpProtocolIpv6) {
        this.httpProtocolIpv6 = httpProtocolIpv6;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=HttpPutResponseHopLimit")
    public Long httpPutResponseHopLimit;
    public GetModifyInstanceMetadataOptionsQueryParams withHttpPutResponseHopLimit(Long httpPutResponseHopLimit) {
        this.httpPutResponseHopLimit = httpPutResponseHopLimit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=HttpTokens")
    public GetModifyInstanceMetadataOptionsHttpTokensEnum httpTokens;
    public GetModifyInstanceMetadataOptionsQueryParams withHttpTokens(GetModifyInstanceMetadataOptionsHttpTokensEnum httpTokens) {
        this.httpTokens = httpTokens;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InstanceId")
    public String instanceId;
    public GetModifyInstanceMetadataOptionsQueryParams withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetModifyInstanceMetadataOptionsVersionEnum version;
    public GetModifyInstanceMetadataOptionsQueryParams withVersion(GetModifyInstanceMetadataOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}