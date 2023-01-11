package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCopyImageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCopyImageActionEnum action;
    public GetCopyImageQueryParams withAction(GetCopyImageActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClientToken")
    public String clientToken;
    public GetCopyImageQueryParams withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Description")
    public String description;
    public GetCopyImageQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DestinationOutpostArn")
    public String destinationOutpostArn;
    public GetCopyImageQueryParams withDestinationOutpostArn(String destinationOutpostArn) {
        this.destinationOutpostArn = destinationOutpostArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetCopyImageQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Encrypted")
    public Boolean encrypted;
    public GetCopyImageQueryParams withEncrypted(Boolean encrypted) {
        this.encrypted = encrypted;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=KmsKeyId")
    public String kmsKeyId;
    public GetCopyImageQueryParams withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Name")
    public String name;
    public GetCopyImageQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SourceImageId")
    public String sourceImageId;
    public GetCopyImageQueryParams withSourceImageId(String sourceImageId) {
        this.sourceImageId = sourceImageId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SourceRegion")
    public String sourceRegion;
    public GetCopyImageQueryParams withSourceRegion(String sourceRegion) {
        this.sourceRegion = sourceRegion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCopyImageVersionEnum version;
    public GetCopyImageQueryParams withVersion(GetCopyImageVersionEnum version) {
        this.version = version;
        return this;
    }
}