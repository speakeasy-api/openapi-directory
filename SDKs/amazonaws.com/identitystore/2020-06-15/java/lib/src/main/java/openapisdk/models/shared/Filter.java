package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Filter
 * A query filter used by <code>ListUsers</code> and <code>ListGroup</code>. This filter object provides the attribute name and attribute value to search users or groups.
**/
public class Filter {
    @JsonProperty("AttributePath")
    public String attributePath;
    public Filter withAttributePath(String attributePath) {
        this.attributePath = attributePath;
        return this;
    }
    @JsonProperty("AttributeValue")
    public String attributeValue;
    public Filter withAttributeValue(String attributeValue) {
        this.attributeValue = attributeValue;
        return this;
    }
}