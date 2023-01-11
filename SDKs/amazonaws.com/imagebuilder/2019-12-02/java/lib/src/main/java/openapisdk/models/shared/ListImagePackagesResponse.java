package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListImagePackagesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imagePackageList")
    public ImagePackage[] imagePackageList;
    public ListImagePackagesResponse withImagePackageList(ImagePackage[] imagePackageList) {
        this.imagePackageList = imagePackageList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListImagePackagesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public ListImagePackagesResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}