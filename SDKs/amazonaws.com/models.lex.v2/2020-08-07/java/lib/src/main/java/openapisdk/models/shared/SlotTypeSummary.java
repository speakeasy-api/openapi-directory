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
 * SlotTypeSummary
 * Provides summary information about a slot type.
**/
public class SlotTypeSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public SlotTypeSummary withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdatedDateTime")
    public OffsetDateTime lastUpdatedDateTime;
    public SlotTypeSummary withLastUpdatedDateTime(OffsetDateTime lastUpdatedDateTime) {
        this.lastUpdatedDateTime = lastUpdatedDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentSlotTypeSignature")
    public String parentSlotTypeSignature;
    public SlotTypeSummary withParentSlotTypeSignature(String parentSlotTypeSignature) {
        this.parentSlotTypeSignature = parentSlotTypeSignature;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slotTypeId")
    public String slotTypeId;
    public SlotTypeSummary withSlotTypeId(String slotTypeId) {
        this.slotTypeId = slotTypeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slotTypeName")
    public String slotTypeName;
    public SlotTypeSummary withSlotTypeName(String slotTypeName) {
        this.slotTypeName = slotTypeName;
        return this;
    }
}