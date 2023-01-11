package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LifecyclePolicy
 * Describes a policy used by EFS lifecycle management to transition files to the Infrequent Access (IA) storage class.
**/
public class LifecyclePolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TransitionToIA")
    public TransitionToIaRulesEnum transitionToIA;
    public LifecyclePolicy withTransitionToIa(TransitionToIaRulesEnum transitionToIA) {
        this.transitionToIA = transitionToIA;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TransitionToPrimaryStorageClass")
    public TransitionToPrimaryStorageClassRulesEnum transitionToPrimaryStorageClass;
    public LifecyclePolicy withTransitionToPrimaryStorageClass(TransitionToPrimaryStorageClassRulesEnum transitionToPrimaryStorageClass) {
        this.transitionToPrimaryStorageClass = transitionToPrimaryStorageClass;
        return this;
    }
}