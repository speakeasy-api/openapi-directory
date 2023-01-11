package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LensReviewReport
 * A report of a lens review.
**/
public class LensReviewReport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Base64String")
    public String base64String;
    public LensReviewReport withBase64String(String base64String) {
        this.base64String = base64String;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LensAlias")
    public String lensAlias;
    public LensReviewReport withLensAlias(String lensAlias) {
        this.lensAlias = lensAlias;
        return this;
    }
}