package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PathToObjectIdentifiers
 * Returns the path to the <code>ObjectIdentifiers</code> that is associated with the directory.
**/
public class PathToObjectIdentifiers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ObjectIdentifiers")
    public String[] objectIdentifiers;
    public PathToObjectIdentifiers withObjectIdentifiers(String[] objectIdentifiers) {
        this.objectIdentifiers = objectIdentifiers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Path")
    public String path;
    public PathToObjectIdentifiers withPath(String path) {
        this.path = path;
        return this;
    }
}