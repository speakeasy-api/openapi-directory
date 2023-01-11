package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRequestsRequestBody {
    @SpeakeasyMetadata("multipartForm:name=destination")
    public String destination;
    public PostRequestsRequestBody withDestination(String destination) {
        this.destination = destination;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=group_ids")
    public String groupIds;
    public PostRequestsRequestBody withGroupIds(String groupIds) {
        this.groupIds = groupIds;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=path")
    public String path;
    public PostRequestsRequestBody withPath(String path) {
        this.path = path;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=user_ids")
    public String userIds;
    public PostRequestsRequestBody withUserIds(String userIds) {
        this.userIds = userIds;
        return this;
    }
}