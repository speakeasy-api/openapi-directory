package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchFlightOffersHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-HTTP-Method-Override")
    public String xHTTPMethodOverride;
    public SearchFlightOffersHeaders withXHttpMethodOverride(String xHTTPMethodOverride) {
        this.xHTTPMethodOverride = xHTTPMethodOverride;
        return this;
    }
}