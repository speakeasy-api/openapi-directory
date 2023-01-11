package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomFieldSettingResponseParent
 * The parent to which the custom field is applied. This can be a project or portfolio and indicates that the tasks or projects that the parent contains may be given custom field values for this custom field.
**/
public class CustomFieldSettingResponseParent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gid")
    public String gid;
    public CustomFieldSettingResponseParent withGid(String gid) {
        this.gid = gid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CustomFieldSettingResponseParent withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_type")
    public String resourceType;
    public CustomFieldSettingResponseParent withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}