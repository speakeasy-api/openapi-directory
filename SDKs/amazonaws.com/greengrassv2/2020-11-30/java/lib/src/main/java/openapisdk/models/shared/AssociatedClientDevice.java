package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * AssociatedClientDevice
 * Contains information about a client device that is associated to a core device for cloud discovery.
**/
public class AssociatedClientDevice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("associationTimestamp")
    public OffsetDateTime associationTimestamp;
    public AssociatedClientDevice withAssociationTimestamp(OffsetDateTime associationTimestamp) {
        this.associationTimestamp = associationTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingName")
    public String thingName;
    public AssociatedClientDevice withThingName(String thingName) {
        this.thingName = thingName;
        return this;
    }
}