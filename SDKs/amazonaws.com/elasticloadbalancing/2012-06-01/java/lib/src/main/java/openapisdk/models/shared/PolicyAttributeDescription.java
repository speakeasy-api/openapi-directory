package openapisdk.models.shared;



/**
 * PolicyAttributeDescription
 * Information about a policy attribute.
**/
public class PolicyAttributeDescription {
    public String attributeName;
    public PolicyAttributeDescription withAttributeName(String attributeName) {
        this.attributeName = attributeName;
        return this;
    }
    public String attributeValue;
    public PolicyAttributeDescription withAttributeValue(String attributeValue) {
        this.attributeValue = attributeValue;
        return this;
    }
}