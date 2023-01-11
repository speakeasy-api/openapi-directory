package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BehaviorEntity
 * List Behaviors
**/
public class BehaviorEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attachment_url")
    public String attachmentUrl;
    public BehaviorEntity withAttachmentUrl(String attachmentUrl) {
        this.attachmentUrl = attachmentUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("behavior")
    public String behavior;
    public BehaviorEntity withBehavior(String behavior) {
        this.behavior = behavior;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public BehaviorEntity withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public BehaviorEntity withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public java.util.Map<String, Object> value;
    public BehaviorEntity withValue(java.util.Map<String, Object> value) {
        this.value = value;
        return this;
    }
}