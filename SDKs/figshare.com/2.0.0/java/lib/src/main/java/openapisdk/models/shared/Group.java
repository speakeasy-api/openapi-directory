package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Group {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("association_criteria")
    public String associationCriteria;
    public Group withAssociationCriteria(String associationCriteria) {
        this.associationCriteria = associationCriteria;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Group withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Group withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent_id")
    public Long parentId;
    public Group withParentId(Long parentId) {
        this.parentId = parentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_id")
    public String resourceId;
    public Group withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
}