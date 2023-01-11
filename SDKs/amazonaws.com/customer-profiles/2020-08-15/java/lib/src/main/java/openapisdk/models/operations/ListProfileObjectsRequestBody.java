package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListProfileObjectsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ObjectFilter")
    public ListProfileObjectsRequestBodyObjectFilter objectFilter;
    public ListProfileObjectsRequestBody withObjectFilter(ListProfileObjectsRequestBodyObjectFilter objectFilter) {
        this.objectFilter = objectFilter;
        return this;
    }
    @JsonProperty("ObjectTypeName")
    public String objectTypeName;
    public ListProfileObjectsRequestBody withObjectTypeName(String objectTypeName) {
        this.objectTypeName = objectTypeName;
        return this;
    }
    @JsonProperty("ProfileId")
    public String profileId;
    public ListProfileObjectsRequestBody withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}