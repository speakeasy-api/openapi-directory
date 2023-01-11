package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OnPremisesTagSet
 * Information about groups of on-premises instance tags.
**/
public class OnPremisesTagSet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onPremisesTagSetList")
    public TagFilter[][] onPremisesTagSetList;
    public OnPremisesTagSet withOnPremisesTagSetList(TagFilter[][] onPremisesTagSetList) {
        this.onPremisesTagSetList = onPremisesTagSetList;
        return this;
    }
}