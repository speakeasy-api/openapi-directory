package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateSlotRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateSlotRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multipleValuesSetting")
    public UpdateSlotRequestBodyMultipleValuesSetting multipleValuesSetting;
    public UpdateSlotRequestBody withMultipleValuesSetting(UpdateSlotRequestBodyMultipleValuesSetting multipleValuesSetting) {
        this.multipleValuesSetting = multipleValuesSetting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("obfuscationSetting")
    public UpdateSlotRequestBodyObfuscationSetting obfuscationSetting;
    public UpdateSlotRequestBody withObfuscationSetting(UpdateSlotRequestBodyObfuscationSetting obfuscationSetting) {
        this.obfuscationSetting = obfuscationSetting;
        return this;
    }
    @JsonProperty("slotName")
    public String slotName;
    public UpdateSlotRequestBody withSlotName(String slotName) {
        this.slotName = slotName;
        return this;
    }
    @JsonProperty("slotTypeId")
    public String slotTypeId;
    public UpdateSlotRequestBody withSlotTypeId(String slotTypeId) {
        this.slotTypeId = slotTypeId;
        return this;
    }
    @JsonProperty("valueElicitationSetting")
    public UpdateSlotRequestBodyValueElicitationSetting valueElicitationSetting;
    public UpdateSlotRequestBody withValueElicitationSetting(UpdateSlotRequestBodyValueElicitationSetting valueElicitationSetting) {
        this.valueElicitationSetting = valueElicitationSetting;
        return this;
    }
}