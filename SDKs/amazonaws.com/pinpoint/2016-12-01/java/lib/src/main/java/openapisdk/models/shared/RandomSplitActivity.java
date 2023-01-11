package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RandomSplitActivity
 * Specifies the settings for a random split activity in a journey. This type of activity randomly sends specified percentages of participants down one of as many as five paths in a journey, based on conditions that you specify.
**/
public class RandomSplitActivity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Branches")
    public RandomSplitEntry[] branches;
    public RandomSplitActivity withBranches(RandomSplitEntry[] branches) {
        this.branches = branches;
        return this;
    }
}