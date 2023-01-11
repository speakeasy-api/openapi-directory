package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateImportJobRequestBodyImportDestination
 * An object that contains details about the resource destination the import job is going to target.
**/
public class CreateImportJobRequestBodyImportDestination {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContactListDestination")
    public openapisdk.models.shared.ContactListDestination contactListDestination;
    public CreateImportJobRequestBodyImportDestination withContactListDestination(openapisdk.models.shared.ContactListDestination contactListDestination) {
        this.contactListDestination = contactListDestination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SuppressionListDestination")
    public openapisdk.models.shared.SuppressionListDestination suppressionListDestination;
    public CreateImportJobRequestBodyImportDestination withSuppressionListDestination(openapisdk.models.shared.SuppressionListDestination suppressionListDestination) {
        this.suppressionListDestination = suppressionListDestination;
        return this;
    }
}