package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActivityListReposStarredByUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public ActivityListReposStarredByUserPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}