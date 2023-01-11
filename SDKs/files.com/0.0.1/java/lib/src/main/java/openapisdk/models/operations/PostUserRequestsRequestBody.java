package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUserRequestsRequestBody {
    @SpeakeasyMetadata("multipartForm:name=details")
    public String details;
    public PostUserRequestsRequestBody withDetails(String details) {
        this.details = details;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=email")
    public String email;
    public PostUserRequestsRequestBody withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public PostUserRequestsRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}