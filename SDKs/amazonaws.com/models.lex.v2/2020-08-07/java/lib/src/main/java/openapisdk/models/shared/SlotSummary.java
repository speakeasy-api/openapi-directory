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
 * SlotSummary
 * Summary information about a slot, a value that the bot elicits from the user.
**/
public class SlotSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public SlotSummary withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdatedDateTime")
    public OffsetDateTime lastUpdatedDateTime;
    public SlotSummary withLastUpdatedDateTime(OffsetDateTime lastUpdatedDateTime) {
        this.lastUpdatedDateTime = lastUpdatedDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slotConstraint")
    public SlotConstraintEnum slotConstraint;
    public SlotSummary withSlotConstraint(SlotConstraintEnum slotConstraint) {
        this.slotConstraint = slotConstraint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slotId")
    public String slotId;
    public SlotSummary withSlotId(String slotId) {
        this.slotId = slotId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slotName")
    public String slotName;
    public SlotSummary withSlotName(String slotName) {
        this.slotName = slotName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slotTypeId")
    public String slotTypeId;
    public SlotSummary withSlotTypeId(String slotTypeId) {
        this.slotTypeId = slotTypeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valueElicitationPromptSpecification")
    public PromptSpecification valueElicitationPromptSpecification;
    public SlotSummary withValueElicitationPromptSpecification(PromptSpecification valueElicitationPromptSpecification) {
        this.valueElicitationPromptSpecification = valueElicitationPromptSpecification;
        return this;
    }
}