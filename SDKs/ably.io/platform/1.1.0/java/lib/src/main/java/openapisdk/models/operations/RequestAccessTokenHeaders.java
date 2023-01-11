package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RequestAccessTokenHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Ably-Version")
    public String xAblyVersion;
    public RequestAccessTokenHeaders withXAblyVersion(String xAblyVersion) {
        this.xAblyVersion = xAblyVersion;
        return this;
    }
}