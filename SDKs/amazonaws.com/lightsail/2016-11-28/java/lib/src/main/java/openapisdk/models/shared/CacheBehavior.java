package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CacheBehavior
 * Describes the default cache behavior of an Amazon Lightsail content delivery network (CDN) distribution.
**/
public class CacheBehavior {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("behavior")
    public BehaviorEnumEnum behavior;
    public CacheBehavior withBehavior(BehaviorEnumEnum behavior) {
        this.behavior = behavior;
        return this;
    }
}