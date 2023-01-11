package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetAppValidationOutputRequest {
    @JsonProperty("appId")
    public String appId;
    public GetAppValidationOutputRequest withAppId(String appId) {
        this.appId = appId;
        return this;
    }
}