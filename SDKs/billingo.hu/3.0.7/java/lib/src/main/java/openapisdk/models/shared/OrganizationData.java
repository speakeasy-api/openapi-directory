package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrganizationData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tax_code")
    public String taxCode;
    public OrganizationData withTaxCode(String taxCode) {
        this.taxCode = taxCode;
        return this;
    }
}