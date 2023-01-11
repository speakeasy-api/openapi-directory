package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetContainersMessagesHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Auth-Project-Id")
    public String xAuthProjectId;
    public GetContainersMessagesHeaders withXAuthProjectId(String xAuthProjectId) {
        this.xAuthProjectId = xAuthProjectId;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Auth-Token")
    public String xAuthToken;
    public GetContainersMessagesHeaders withXAuthToken(String xAuthToken) {
        this.xAuthToken = xAuthToken;
        return this;
    }
}