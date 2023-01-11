package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeBundleResult
 *  Result structure contains the details of the bundle. 
**/
public class DescribeBundleResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public BundleDetails details;
    public DescribeBundleResult withDetails(BundleDetails details) {
        this.details = details;
        return this;
    }
}