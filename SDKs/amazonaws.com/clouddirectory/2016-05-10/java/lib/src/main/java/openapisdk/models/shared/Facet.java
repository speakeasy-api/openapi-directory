package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Facet
 * A structure that contains <code>Name</code>, <code>ARN</code>, <code>Attributes</code>, <code> <a>Rule</a>s</code>, and <code>ObjectTypes</code>. See <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/whatarefacets.html">Facets</a> for more information.
**/
public class Facet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public Facet withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ObjectType")
    public ObjectTypeEnum objectType;
    public Facet withObjectType(ObjectTypeEnum objectType) {
        this.objectType = objectType;
        return this;
    }
}