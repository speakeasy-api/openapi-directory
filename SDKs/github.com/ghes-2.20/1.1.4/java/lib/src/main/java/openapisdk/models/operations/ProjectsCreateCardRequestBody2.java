package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ProjectsCreateCardRequestBody2 {
    @JsonProperty("content_id")
    public Long contentId;
    public ProjectsCreateCardRequestBody2 withContentId(Long contentId) {
        this.contentId = contentId;
        return this;
    }
    @JsonProperty("content_type")
    public String contentType;
    public ProjectsCreateCardRequestBody2 withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
}