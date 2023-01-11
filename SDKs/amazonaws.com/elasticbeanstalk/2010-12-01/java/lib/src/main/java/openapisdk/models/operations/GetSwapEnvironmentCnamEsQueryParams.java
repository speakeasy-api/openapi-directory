package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSwapEnvironmentCnamEsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetSwapEnvironmentCnamEsActionEnum action;
    public GetSwapEnvironmentCnamEsQueryParams withAction(GetSwapEnvironmentCnamEsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DestinationEnvironmentId")
    public String destinationEnvironmentId;
    public GetSwapEnvironmentCnamEsQueryParams withDestinationEnvironmentId(String destinationEnvironmentId) {
        this.destinationEnvironmentId = destinationEnvironmentId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DestinationEnvironmentName")
    public String destinationEnvironmentName;
    public GetSwapEnvironmentCnamEsQueryParams withDestinationEnvironmentName(String destinationEnvironmentName) {
        this.destinationEnvironmentName = destinationEnvironmentName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SourceEnvironmentId")
    public String sourceEnvironmentId;
    public GetSwapEnvironmentCnamEsQueryParams withSourceEnvironmentId(String sourceEnvironmentId) {
        this.sourceEnvironmentId = sourceEnvironmentId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SourceEnvironmentName")
    public String sourceEnvironmentName;
    public GetSwapEnvironmentCnamEsQueryParams withSourceEnvironmentName(String sourceEnvironmentName) {
        this.sourceEnvironmentName = sourceEnvironmentName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetSwapEnvironmentCnamEsVersionEnum version;
    public GetSwapEnvironmentCnamEsQueryParams withVersion(GetSwapEnvironmentCnamEsVersionEnum version) {
        this.version = version;
        return this;
    }
}