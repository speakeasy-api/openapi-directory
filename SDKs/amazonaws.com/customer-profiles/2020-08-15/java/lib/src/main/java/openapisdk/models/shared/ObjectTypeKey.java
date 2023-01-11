package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObjectTypeKey
 * An object that defines the Key element of a ProfileObject. A Key is a special element that can be used to search for a customer profile.
**/
public class ObjectTypeKey {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FieldNames")
    public String[] fieldNames;
    public ObjectTypeKey withFieldNames(String[] fieldNames) {
        this.fieldNames = fieldNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StandardIdentifiers")
    public StandardIdentifierEnum[] standardIdentifiers;
    public ObjectTypeKey withStandardIdentifiers(StandardIdentifierEnum[] standardIdentifiers) {
        this.standardIdentifiers = standardIdentifiers;
        return this;
    }
}