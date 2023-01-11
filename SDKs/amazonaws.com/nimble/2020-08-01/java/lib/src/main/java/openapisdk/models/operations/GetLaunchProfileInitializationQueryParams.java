package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLaunchProfileInitializationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=launchProfileProtocolVersions")
    public String[] launchProfileProtocolVersions;
    public GetLaunchProfileInitializationQueryParams withLaunchProfileProtocolVersions(String[] launchProfileProtocolVersions) {
        this.launchProfileProtocolVersions = launchProfileProtocolVersions;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=launchPurpose")
    public String launchPurpose;
    public GetLaunchProfileInitializationQueryParams withLaunchPurpose(String launchPurpose) {
        this.launchPurpose = launchPurpose;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=platform")
    public String platform;
    public GetLaunchProfileInitializationQueryParams withPlatform(String platform) {
        this.platform = platform;
        return this;
    }
}