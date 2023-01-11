package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConnectorEntityField
 *  Describes the data model of a connector field. For example, for an <i>account</i> entity, the fields would be <i>account name</i>, <i>account ID</i>, and so on. 
**/
public class ConnectorEntityField {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ConnectorEntityField withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationProperties")
    public DestinationFieldProperties destinationProperties;
    public ConnectorEntityField withDestinationProperties(DestinationFieldProperties destinationProperties) {
        this.destinationProperties = destinationProperties;
        return this;
    }
    @JsonProperty("identifier")
    public String identifier;
    public ConnectorEntityField withIdentifier(String identifier) {
        this.identifier = identifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public ConnectorEntityField withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceProperties")
    public SourceFieldProperties sourceProperties;
    public ConnectorEntityField withSourceProperties(SourceFieldProperties sourceProperties) {
        this.sourceProperties = sourceProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportedFieldTypeDetails")
    public SupportedFieldTypeDetails supportedFieldTypeDetails;
    public ConnectorEntityField withSupportedFieldTypeDetails(SupportedFieldTypeDetails supportedFieldTypeDetails) {
        this.supportedFieldTypeDetails = supportedFieldTypeDetails;
        return this;
    }
}