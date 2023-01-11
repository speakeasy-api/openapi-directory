package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostProjectsRequestBody {
    @SpeakeasyMetadata("multipartForm:name=global_access")
    public String globalAccess;
    public PostProjectsRequestBody withGlobalAccess(String globalAccess) {
        this.globalAccess = globalAccess;
        return this;
    }
}