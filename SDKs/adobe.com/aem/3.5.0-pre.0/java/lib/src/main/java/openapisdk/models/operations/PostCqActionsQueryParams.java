package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCqActionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=authorizableId")
    public String authorizableId;
    public PostCqActionsQueryParams withAuthorizableId(String authorizableId) {
        this.authorizableId = authorizableId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changelog")
    public String changelog;
    public PostCqActionsQueryParams withChangelog(String changelog) {
        this.changelog = changelog;
        return this;
    }
}