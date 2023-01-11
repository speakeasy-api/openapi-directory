package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateSlotRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateSlotRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multipleValuesSetting")
    public CreateSlotRequestBodyMultipleValuesSetting multipleValuesSetting;
    public CreateSlotRequestBody withMultipleValuesSetting(CreateSlotRequestBodyMultipleValuesSetting multipleValuesSetting) {
        this.multipleValuesSetting = multipleValuesSetting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("obfuscationSetting")
    public CreateSlotRequestBodyObfuscationSetting obfuscationSetting;
    public CreateSlotRequestBody withObfuscationSetting(CreateSlotRequestBodyObfuscationSetting obfuscationSetting) {
        this.obfuscationSetting = obfuscationSetting;
        return this;
    }
    @JsonProperty("slotName")
    public String slotName;
    public CreateSlotRequestBody withSlotName(String slotName) {
        this.slotName = slotName;
        return this;
    }
    @JsonProperty("slotTypeId")
    public String slotTypeId;
    public CreateSlotRequestBody withSlotTypeId(String slotTypeId) {
        this.slotTypeId = slotTypeId;
        return this;
    }
    @JsonProperty("valueElicitationSetting")
    public CreateSlotRequestBodyValueElicitationSetting valueElicitationSetting;
    public CreateSlotRequestBody withValueElicitationSetting(CreateSlotRequestBodyValueElicitationSetting valueElicitationSetting) {
        this.valueElicitationSetting = valueElicitationSetting;
        return this;
    }
}