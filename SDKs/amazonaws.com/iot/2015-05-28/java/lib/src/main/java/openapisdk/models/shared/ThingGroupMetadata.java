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
 * ThingGroupMetadata
 * Thing group metadata.
**/
public class ThingGroupMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationDate")
    public OffsetDateTime creationDate;
    public ThingGroupMetadata withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentGroupName")
    public String parentGroupName;
    public ThingGroupMetadata withParentGroupName(String parentGroupName) {
        this.parentGroupName = parentGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rootToParentThingGroups")
    public GroupNameAndArn[] rootToParentThingGroups;
    public ThingGroupMetadata withRootToParentThingGroups(GroupNameAndArn[] rootToParentThingGroups) {
        this.rootToParentThingGroups = rootToParentThingGroups;
        return this;
    }
}