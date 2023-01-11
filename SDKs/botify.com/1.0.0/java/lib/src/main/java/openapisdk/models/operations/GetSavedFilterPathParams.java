package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSavedFilterPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=identifier")
    public String identifier;
    public GetSavedFilterPathParams withIdentifier(String identifier) {
        this.identifier = identifier;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_slug")
    public String projectSlug;
    public GetSavedFilterPathParams withProjectSlug(String projectSlug) {
        this.projectSlug = projectSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public GetSavedFilterPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}