package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StartTextDetectionFilters
 * Set of optional parameters that let you set the criteria text must meet to be included in your response. <code>WordFilter</code> looks at a word's height, width and minimum confidence. <code>RegionOfInterest</code> lets you set a specific region of the screen to look for text in.
**/
public class StartTextDetectionFilters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RegionsOfInterest")
    public RegionOfInterest[] regionsOfInterest;
    public StartTextDetectionFilters withRegionsOfInterest(RegionOfInterest[] regionsOfInterest) {
        this.regionsOfInterest = regionsOfInterest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WordFilter")
    public DetectionFilter wordFilter;
    public StartTextDetectionFilters withWordFilter(DetectionFilter wordFilter) {
        this.wordFilter = wordFilter;
        return this;
    }
}