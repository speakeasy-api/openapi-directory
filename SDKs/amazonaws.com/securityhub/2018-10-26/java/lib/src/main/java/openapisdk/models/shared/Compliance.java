package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Compliance
 * Contains finding details that are specific to control-based findings. Only returned for findings generated from controls.
**/
public class Compliance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RelatedRequirements")
    public String[] relatedRequirements;
    public Compliance withRelatedRequirements(String[] relatedRequirements) {
        this.relatedRequirements = relatedRequirements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public ComplianceStatusEnum status;
    public Compliance withStatus(ComplianceStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatusReasons")
    public StatusReason[] statusReasons;
    public Compliance withStatusReasons(StatusReason[] statusReasons) {
        this.statusReasons = statusReasons;
        return this;
    }
}