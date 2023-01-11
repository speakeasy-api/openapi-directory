package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutAppsListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AppsList")
    public AppsListData appsList;
    public PutAppsListResponse withAppsList(AppsListData appsList) {
        this.appsList = appsList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AppsListArn")
    public String appsListArn;
    public PutAppsListResponse withAppsListArn(String appsListArn) {
        this.appsListArn = appsListArn;
        return this;
    }
}