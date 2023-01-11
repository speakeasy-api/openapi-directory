package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModifyAquaConfigurationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetModifyAquaConfigurationActionEnum action;
    public GetModifyAquaConfigurationQueryParams withAction(GetModifyAquaConfigurationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AquaConfigurationStatus")
    public GetModifyAquaConfigurationAquaConfigurationStatusEnum aquaConfigurationStatus;
    public GetModifyAquaConfigurationQueryParams withAquaConfigurationStatus(GetModifyAquaConfigurationAquaConfigurationStatusEnum aquaConfigurationStatus) {
        this.aquaConfigurationStatus = aquaConfigurationStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClusterIdentifier")
    public String clusterIdentifier;
    public GetModifyAquaConfigurationQueryParams withClusterIdentifier(String clusterIdentifier) {
        this.clusterIdentifier = clusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetModifyAquaConfigurationVersionEnum version;
    public GetModifyAquaConfigurationQueryParams withVersion(GetModifyAquaConfigurationVersionEnum version) {
        this.version = version;
        return this;
    }
}