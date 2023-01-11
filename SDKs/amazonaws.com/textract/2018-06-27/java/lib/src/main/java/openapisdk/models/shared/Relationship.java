package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Relationship
 * <p>Information about how blocks are related to each other. A <code>Block</code> object contains 0 or more <code>Relation</code> objects in a list, <code>Relationships</code>. For more information, see <a>Block</a>.</p> <p>The <code>Type</code> element provides the type of the relationship for all blocks in the <code>IDs</code> array. </p>
**/
public class Relationship {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Ids")
    public String[] ids;
    public Relationship withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public RelationshipTypeEnum type;
    public Relationship withType(RelationshipTypeEnum type) {
        this.type = type;
        return this;
    }
}