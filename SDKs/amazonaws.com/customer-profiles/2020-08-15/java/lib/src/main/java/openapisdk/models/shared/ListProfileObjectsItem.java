package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListProfileObjectsItem
 * A ProfileObject in a list of ProfileObjects.
**/
public class ListProfileObjectsItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Object")
    public String object;
    public ListProfileObjectsItem withObject(String object) {
        this.object = object;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ObjectTypeName")
    public String objectTypeName;
    public ListProfileObjectsItem withObjectTypeName(String objectTypeName) {
        this.objectTypeName = objectTypeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProfileObjectUniqueKey")
    public String profileObjectUniqueKey;
    public ListProfileObjectsItem withProfileObjectUniqueKey(String profileObjectUniqueKey) {
        this.profileObjectUniqueKey = profileObjectUniqueKey;
        return this;
    }
}