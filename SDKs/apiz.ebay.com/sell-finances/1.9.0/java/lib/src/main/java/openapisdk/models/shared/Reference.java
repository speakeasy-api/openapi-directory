package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Reference
 * This field is returned for NON_SALE_CHARGE transactions that contain non-transactional seller fees.
**/
public class Reference {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("referenceId")
    public String referenceId;
    public Reference withReferenceId(String referenceId) {
        this.referenceId = referenceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("referenceType")
    public String referenceType;
    public Reference withReferenceType(String referenceType) {
        this.referenceType = referenceType;
        return this;
    }
}