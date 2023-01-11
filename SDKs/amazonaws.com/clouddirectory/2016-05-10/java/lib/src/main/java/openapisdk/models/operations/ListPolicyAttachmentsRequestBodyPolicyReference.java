package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListPolicyAttachmentsRequestBodyPolicyReference
 * The reference that identifies an object.
**/
public class ListPolicyAttachmentsRequestBodyPolicyReference {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Selector")
    public String selector;
    public ListPolicyAttachmentsRequestBodyPolicyReference withSelector(String selector) {
        this.selector = selector;
        return this;
    }
}