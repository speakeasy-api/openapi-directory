package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchMessagesIdRequestBody {
    @SpeakeasyMetadata("multipartForm:name=body")
    public String body;
    public PatchMessagesIdRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=project_id")
    public Integer projectId;
    public PatchMessagesIdRequestBody withProjectId(Integer projectId) {
        this.projectId = projectId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=subject")
    public String subject;
    public PatchMessagesIdRequestBody withSubject(String subject) {
        this.subject = subject;
        return this;
    }
}