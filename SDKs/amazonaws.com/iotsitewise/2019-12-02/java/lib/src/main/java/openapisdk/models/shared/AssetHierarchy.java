package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssetHierarchy
 * Describes an asset hierarchy that contains a hierarchy's name and ID.
**/
public class AssetHierarchy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AssetHierarchy withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public AssetHierarchy withName(String name) {
        this.name = name;
        return this;
    }
}