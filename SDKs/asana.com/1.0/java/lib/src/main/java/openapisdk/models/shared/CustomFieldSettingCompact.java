package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomFieldSettingCompact
 * Custom Fields Settings objects represent the many-to-many join of the Custom Field and Project as well as stores information that is relevant to that particular pairing.
**/
public class CustomFieldSettingCompact {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gid")
    public String gid;
    public CustomFieldSettingCompact withGid(String gid) {
        this.gid = gid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_type")
    public String resourceType;
    public CustomFieldSettingCompact withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}