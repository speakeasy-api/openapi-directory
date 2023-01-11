package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImportDestination
 * An object that contains details about the resource destination the import job is going to target.
**/
public class ImportDestination {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContactListDestination")
    public ContactListDestination contactListDestination;
    public ImportDestination withContactListDestination(ContactListDestination contactListDestination) {
        this.contactListDestination = contactListDestination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SuppressionListDestination")
    public SuppressionListDestination suppressionListDestination;
    public ImportDestination withSuppressionListDestination(SuppressionListDestination suppressionListDestination) {
        this.suppressionListDestination = suppressionListDestination;
        return this;
    }
}