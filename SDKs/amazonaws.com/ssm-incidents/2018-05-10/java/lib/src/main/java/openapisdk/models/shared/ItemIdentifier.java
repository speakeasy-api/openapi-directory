package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ItemIdentifier
 * Details and type of a related item.
**/
public class ItemIdentifier {
    @JsonProperty("type")
    public ItemTypeEnum type;
    public ItemIdentifier withType(ItemTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("value")
    public ItemValue value;
    public ItemIdentifier withValue(ItemValue value) {
        this.value = value;
        return this;
    }
}