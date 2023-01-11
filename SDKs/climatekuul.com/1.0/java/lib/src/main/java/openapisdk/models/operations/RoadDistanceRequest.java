package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RoadDistanceRequest {
    public String serverURL;
    public RoadDistanceRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public RoadDistanceRequestBody request;
    public RoadDistanceRequest withRequest(RoadDistanceRequestBody request) {
        this.request = request;
        return this;
    }
}