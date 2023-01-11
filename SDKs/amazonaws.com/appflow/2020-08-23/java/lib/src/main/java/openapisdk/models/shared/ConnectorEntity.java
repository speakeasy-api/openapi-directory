package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConnectorEntity
 *  The high-level entity that can be queried in Amazon AppFlow. For example, a Salesforce entity might be an <i>Account</i> or <i>Opportunity</i>, whereas a ServiceNow entity might be an <i>Incident</i>. 
**/
public class ConnectorEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasNestedEntities")
    public Boolean hasNestedEntities;
    public ConnectorEntity withHasNestedEntities(Boolean hasNestedEntities) {
        this.hasNestedEntities = hasNestedEntities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public ConnectorEntity withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ConnectorEntity withName(String name) {
        this.name = name;
        return this;
    }
}