package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeCopyProductStatusOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CopyProductStatus")
    public CopyProductStatusEnum copyProductStatus;
    public DescribeCopyProductStatusOutput withCopyProductStatus(CopyProductStatusEnum copyProductStatus) {
        this.copyProductStatus = copyProductStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatusDetail")
    public String statusDetail;
    public DescribeCopyProductStatusOutput withStatusDetail(String statusDetail) {
        this.statusDetail = statusDetail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetProductId")
    public String targetProductId;
    public DescribeCopyProductStatusOutput withTargetProductId(String targetProductId) {
        this.targetProductId = targetProductId;
        return this;
    }
}