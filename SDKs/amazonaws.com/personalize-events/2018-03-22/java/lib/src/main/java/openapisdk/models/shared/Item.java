package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Item
 * Represents item metadata added to an Items dataset using the <code>PutItems</code> API. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-items.html">Importing Items Incrementally</a>. 
**/
public class Item {
    @JsonProperty("itemId")
    public String itemId;
    public Item withItemId(String itemId) {
        this.itemId = itemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public Object properties;
    public Item withProperties(Object properties) {
        this.properties = properties;
        return this;
    }
}