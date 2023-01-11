package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetAppValidationConfigurationRequest {
    @JsonProperty("appId")
    public String appId;
    public GetAppValidationConfigurationRequest withAppId(String appId) {
        this.appId = appId;
        return this;
    }
}