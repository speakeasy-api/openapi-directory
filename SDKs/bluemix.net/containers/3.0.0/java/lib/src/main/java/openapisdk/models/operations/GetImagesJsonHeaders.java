package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetImagesJsonHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Auth-Project-Id")
    public String xAuthProjectId;
    public GetImagesJsonHeaders withXAuthProjectId(String xAuthProjectId) {
        this.xAuthProjectId = xAuthProjectId;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Auth-Token")
    public String xAuthToken;
    public GetImagesJsonHeaders withXAuthToken(String xAuthToken) {
        this.xAuthToken = xAuthToken;
        return this;
    }
}