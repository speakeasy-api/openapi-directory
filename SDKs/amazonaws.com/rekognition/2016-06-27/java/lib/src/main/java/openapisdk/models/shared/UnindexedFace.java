package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UnindexedFace
 * A face that <a>IndexFaces</a> detected, but didn't index. Use the <code>Reasons</code> response attribute to determine why a face wasn't indexed.
**/
public class UnindexedFace {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FaceDetail")
    public FaceDetail faceDetail;
    public UnindexedFace withFaceDetail(FaceDetail faceDetail) {
        this.faceDetail = faceDetail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Reasons")
    public ReasonEnum[] reasons;
    public UnindexedFace withReasons(ReasonEnum[] reasons) {
        this.reasons = reasons;
        return this;
    }
}