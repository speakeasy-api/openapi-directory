package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStatsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Ably-Version")
    public String xAblyVersion;
    public GetStatsHeaders withXAblyVersion(String xAblyVersion) {
        this.xAblyVersion = xAblyVersion;
        return this;
    }
}