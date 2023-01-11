package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostMessagesRequestBody {
    @SpeakeasyMetadata("multipartForm:name=body")
    public String body;
    public PostMessagesRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=project_id")
    public Integer projectId;
    public PostMessagesRequestBody withProjectId(Integer projectId) {
        this.projectId = projectId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=subject")
    public String subject;
    public PostMessagesRequestBody withSubject(String subject) {
        this.subject = subject;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=user_id")
    public Integer userId;
    public PostMessagesRequestBody withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}