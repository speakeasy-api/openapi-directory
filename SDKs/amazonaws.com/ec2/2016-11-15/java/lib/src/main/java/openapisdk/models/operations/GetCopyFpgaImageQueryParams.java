package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCopyFpgaImageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCopyFpgaImageActionEnum action;
    public GetCopyFpgaImageQueryParams withAction(GetCopyFpgaImageActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClientToken")
    public String clientToken;
    public GetCopyFpgaImageQueryParams withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Description")
    public String description;
    public GetCopyFpgaImageQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetCopyFpgaImageQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Name")
    public String name;
    public GetCopyFpgaImageQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SourceFpgaImageId")
    public String sourceFpgaImageId;
    public GetCopyFpgaImageQueryParams withSourceFpgaImageId(String sourceFpgaImageId) {
        this.sourceFpgaImageId = sourceFpgaImageId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SourceRegion")
    public String sourceRegion;
    public GetCopyFpgaImageQueryParams withSourceRegion(String sourceRegion) {
        this.sourceRegion = sourceRegion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCopyFpgaImageVersionEnum version;
    public GetCopyFpgaImageQueryParams withVersion(GetCopyFpgaImageVersionEnum version) {
        this.version = version;
        return this;
    }
}