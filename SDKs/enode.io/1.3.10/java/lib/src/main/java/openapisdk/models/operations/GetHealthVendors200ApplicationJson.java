package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetHealthVendors200ApplicationJson
 * Vendor status and metadata
**/
public class GetHealthVendors200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GetHealthVendors200ApplicationJson withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GetHealthVendors200ApplicationJsonStatusEnum status;
    public GetHealthVendors200ApplicationJson withStatus(GetHealthVendors200ApplicationJsonStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vendor")
    public openapisdk.models.shared.Oneme1vendors1Percent7BvendorPercent7DDeleteParameters0SchemaEnum vendor;
    public GetHealthVendors200ApplicationJson withVendor(openapisdk.models.shared.Oneme1vendors1Percent7BvendorPercent7DDeleteParameters0SchemaEnum vendor) {
        this.vendor = vendor;
        return this;
    }
}