package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProjectNote {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("abstract")
    public String abstract_;
    public ProjectNote withAbstract(String abstract_) {
        this.abstract_ = abstract_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_date")
    public String createdDate;
    public ProjectNote withCreatedDate(String createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public ProjectNote withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modified_date")
    public String modifiedDate;
    public ProjectNote withModifiedDate(String modifiedDate) {
        this.modifiedDate = modifiedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_id")
    public Long userId;
    public ProjectNote withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_name")
    public String userName;
    public ProjectNote withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}