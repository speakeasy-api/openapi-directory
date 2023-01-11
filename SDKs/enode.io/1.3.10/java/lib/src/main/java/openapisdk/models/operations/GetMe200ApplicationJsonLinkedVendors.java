package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetMe200ApplicationJsonLinkedVendors {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isValid")
    public Boolean isValid;
    public GetMe200ApplicationJsonLinkedVendors withIsValid(Boolean isValid) {
        this.isValid = isValid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vendor")
    public openapisdk.models.shared.Oneme1vendors1Percent7BvendorPercent7DDeleteParameters0SchemaEnum vendor;
    public GetMe200ApplicationJsonLinkedVendors withVendor(openapisdk.models.shared.Oneme1vendors1Percent7BvendorPercent7DDeleteParameters0SchemaEnum vendor) {
        this.vendor = vendor;
        return this;
    }
}