package openapisdk.models.shared;



/**
 * PolicyAttributeTypeDescription
 * Information about a policy attribute type.
**/
public class PolicyAttributeTypeDescription {
    public String attributeName;
    public PolicyAttributeTypeDescription withAttributeName(String attributeName) {
        this.attributeName = attributeName;
        return this;
    }
    public String attributeType;
    public PolicyAttributeTypeDescription withAttributeType(String attributeType) {
        this.attributeType = attributeType;
        return this;
    }
    public String cardinality;
    public PolicyAttributeTypeDescription withCardinality(String cardinality) {
        this.cardinality = cardinality;
        return this;
    }
    public String defaultValue;
    public PolicyAttributeTypeDescription withDefaultValue(String defaultValue) {
        this.defaultValue = defaultValue;
        return this;
    }
    public String description;
    public PolicyAttributeTypeDescription withDescription(String description) {
        this.description = description;
        return this;
    }
}