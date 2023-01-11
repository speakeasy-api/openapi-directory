package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostProjectUsernameProjectSshKeyHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Content-Type")
    public PostProjectUsernameProjectSshKeyContentTypeEnum contentType;
    public PostProjectUsernameProjectSshKeyHeaders withContentType(PostProjectUsernameProjectSshKeyContentTypeEnum contentType) {
        this.contentType = contentType;
        return this;
    }
}