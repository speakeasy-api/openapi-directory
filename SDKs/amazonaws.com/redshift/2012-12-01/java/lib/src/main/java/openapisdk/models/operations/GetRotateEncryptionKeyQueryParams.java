package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRotateEncryptionKeyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetRotateEncryptionKeyActionEnum action;
    public GetRotateEncryptionKeyQueryParams withAction(GetRotateEncryptionKeyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClusterIdentifier")
    public String clusterIdentifier;
    public GetRotateEncryptionKeyQueryParams withClusterIdentifier(String clusterIdentifier) {
        this.clusterIdentifier = clusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetRotateEncryptionKeyVersionEnum version;
    public GetRotateEncryptionKeyQueryParams withVersion(GetRotateEncryptionKeyVersionEnum version) {
        this.version = version;
        return this;
    }
}