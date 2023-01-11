package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchProjectsIdRequestBody {
    @SpeakeasyMetadata("multipartForm:name=global_access")
    public String globalAccess;
    public PatchProjectsIdRequestBody withGlobalAccess(String globalAccess) {
        this.globalAccess = globalAccess;
        return this;
    }
}