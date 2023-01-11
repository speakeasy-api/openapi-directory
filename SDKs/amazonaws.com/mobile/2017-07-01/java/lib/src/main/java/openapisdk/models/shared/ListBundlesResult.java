package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListBundlesResult
 *  Result structure contains a list of all available bundles with details. 
**/
public class ListBundlesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bundleList")
    public BundleDetails[] bundleList;
    public ListBundlesResult withBundleList(BundleDetails[] bundleList) {
        this.bundleList = bundleList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListBundlesResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}