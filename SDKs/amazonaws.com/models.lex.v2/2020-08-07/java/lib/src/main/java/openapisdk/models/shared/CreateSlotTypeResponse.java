package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CreateSlotTypeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botId")
    public String botId;
    public CreateSlotTypeResponse withBotId(String botId) {
        this.botId = botId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botVersion")
    public String botVersion;
    public CreateSlotTypeResponse withBotVersion(String botVersion) {
        this.botVersion = botVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationDateTime")
    public OffsetDateTime creationDateTime;
    public CreateSlotTypeResponse withCreationDateTime(OffsetDateTime creationDateTime) {
        this.creationDateTime = creationDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateSlotTypeResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localeId")
    public String localeId;
    public CreateSlotTypeResponse withLocaleId(String localeId) {
        this.localeId = localeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentSlotTypeSignature")
    public String parentSlotTypeSignature;
    public CreateSlotTypeResponse withParentSlotTypeSignature(String parentSlotTypeSignature) {
        this.parentSlotTypeSignature = parentSlotTypeSignature;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slotTypeId")
    public String slotTypeId;
    public CreateSlotTypeResponse withSlotTypeId(String slotTypeId) {
        this.slotTypeId = slotTypeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slotTypeName")
    public String slotTypeName;
    public CreateSlotTypeResponse withSlotTypeName(String slotTypeName) {
        this.slotTypeName = slotTypeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slotTypeValues")
    public SlotTypeValue[] slotTypeValues;
    public CreateSlotTypeResponse withSlotTypeValues(SlotTypeValue[] slotTypeValues) {
        this.slotTypeValues = slotTypeValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valueSelectionSetting")
    public SlotValueSelectionSetting valueSelectionSetting;
    public CreateSlotTypeResponse withValueSelectionSetting(SlotValueSelectionSetting valueSelectionSetting) {
        this.valueSelectionSetting = valueSelectionSetting;
        return this;
    }
}