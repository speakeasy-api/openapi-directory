package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BlackFrame
 *  A filter that allows you to control the black frame detection by specifying the black levels and pixel coverage of black pixels in a frame. As videos can come from multiple sources, formats, and time periods, they may contain different standards and varying noise levels for black frames that need to be accounted for. For more information, see <a>StartSegmentDetection</a>. 
**/
public class BlackFrame {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxPixelThreshold")
    public Float maxPixelThreshold;
    public BlackFrame withMaxPixelThreshold(Float maxPixelThreshold) {
        this.maxPixelThreshold = maxPixelThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinCoveragePercentage")
    public Float minCoveragePercentage;
    public BlackFrame withMinCoveragePercentage(Float minCoveragePercentage) {
        this.minCoveragePercentage = minCoveragePercentage;
        return this;
    }
}