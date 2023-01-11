package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObjectIdentifierAndLinkNameTuple
 * A pair of ObjectIdentifier and LinkName.
**/
public class ObjectIdentifierAndLinkNameTuple {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LinkName")
    public String linkName;
    public ObjectIdentifierAndLinkNameTuple withLinkName(String linkName) {
        this.linkName = linkName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ObjectIdentifier")
    public String objectIdentifier;
    public ObjectIdentifierAndLinkNameTuple withObjectIdentifier(String objectIdentifier) {
        this.objectIdentifier = objectIdentifier;
        return this;
    }
}