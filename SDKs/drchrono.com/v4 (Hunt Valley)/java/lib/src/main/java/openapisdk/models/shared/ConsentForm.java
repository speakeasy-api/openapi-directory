package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConsentForm {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archived")
    public Boolean archived;
    public ConsentForm withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    @JsonProperty("assign_by_default")
    public Boolean assignByDefault;
    public ConsentForm withAssignByDefault(Boolean assignByDefault) {
        this.assignByDefault = assignByDefault;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public String createdAt;
    public ConsentForm withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("doctor")
    public Long doctor;
    public ConsentForm withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public ConsentForm withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("is_mandatory")
    public Boolean isMandatory;
    public ConsentForm withIsMandatory(Boolean isMandatory) {
        this.isMandatory = isMandatory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order")
    public Long order;
    public ConsentForm withOrder(Long order) {
        this.order = order;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public ConsentForm withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_at")
    public String updatedAt;
    public ConsentForm withUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public ConsentForm withUri(String uri) {
        this.uri = uri;
        return this;
    }
}