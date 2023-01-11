package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DetectTextFilters
 * A set of optional parameters that you can use to set the criteria that the text must meet to be included in your response. <code>WordFilter</code> looks at a word’s height, width, and minimum confidence. <code>RegionOfInterest</code> lets you set a specific region of the image to look for text in. 
**/
public class DetectTextFilters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RegionsOfInterest")
    public RegionOfInterest[] regionsOfInterest;
    public DetectTextFilters withRegionsOfInterest(RegionOfInterest[] regionsOfInterest) {
        this.regionsOfInterest = regionsOfInterest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WordFilter")
    public DetectionFilter wordFilter;
    public DetectTextFilters withWordFilter(DetectionFilter wordFilter) {
        this.wordFilter = wordFilter;
        return this;
    }
}