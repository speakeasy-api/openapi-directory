package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObjectTypes
 * Information about the type of an object in a merge operation.
**/
public class ObjectTypes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("base")
    public ObjectTypeEnumEnum base;
    public ObjectTypes withBase(ObjectTypeEnumEnum base) {
        this.base = base;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination")
    public ObjectTypeEnumEnum destination;
    public ObjectTypes withDestination(ObjectTypeEnumEnum destination) {
        this.destination = destination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public ObjectTypeEnumEnum source;
    public ObjectTypes withSource(ObjectTypeEnumEnum source) {
        this.source = source;
        return this;
    }
}