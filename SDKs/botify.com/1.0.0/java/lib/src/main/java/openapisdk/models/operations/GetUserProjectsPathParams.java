package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserProjectsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public GetUserProjectsPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}