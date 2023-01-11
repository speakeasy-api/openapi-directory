package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAppsListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AppsList")
    public AppsListData appsList;
    public GetAppsListResponse withAppsList(AppsListData appsList) {
        this.appsList = appsList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AppsListArn")
    public String appsListArn;
    public GetAppsListResponse withAppsListArn(String appsListArn) {
        this.appsListArn = appsListArn;
        return this;
    }
}