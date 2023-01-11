package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class ModifierGroupFilter {
    @SpeakeasyMetadata("queryParam:name=modifier_group_id")
    public String modifierGroupId;
    public ModifierGroupFilter withModifierGroupId(String modifierGroupId) {
        this.modifierGroupId = modifierGroupId;
        return this;
    }
}