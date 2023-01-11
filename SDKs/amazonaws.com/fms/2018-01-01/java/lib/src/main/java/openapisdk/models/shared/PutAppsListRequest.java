package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutAppsListRequest {
    @JsonProperty("AppsList")
    public AppsListData appsList;
    public PutAppsListRequest withAppsList(AppsListData appsList) {
        this.appsList = appsList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TagList")
    public Tag[] tagList;
    public PutAppsListRequest withTagList(Tag[] tagList) {
        this.tagList = tagList;
        return this;
    }
}