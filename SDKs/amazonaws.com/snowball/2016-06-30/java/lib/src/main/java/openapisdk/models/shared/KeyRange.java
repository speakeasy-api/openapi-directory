package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KeyRange
 * Contains a key range. For export jobs, a <code>S3Resource</code> object can have an optional <code>KeyRange</code> value. The length of the range is defined at job creation, and has either an inclusive <code>BeginMarker</code>, an inclusive <code>EndMarker</code>, or both. Ranges are UTF-8 binary sorted.
**/
public class KeyRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BeginMarker")
    public String beginMarker;
    public KeyRange withBeginMarker(String beginMarker) {
        this.beginMarker = beginMarker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndMarker")
    public String endMarker;
    public KeyRange withEndMarker(String endMarker) {
        this.endMarker = endMarker;
        return this;
    }
}