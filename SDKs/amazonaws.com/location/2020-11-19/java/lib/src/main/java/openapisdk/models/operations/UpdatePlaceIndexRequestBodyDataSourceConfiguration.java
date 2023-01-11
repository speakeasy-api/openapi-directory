package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdatePlaceIndexRequestBodyDataSourceConfiguration
 * <p>Specifies the data storage option chosen for requesting Places.</p> <important> <p>When using Amazon Location Places:</p> <ul> <li> <p>If using HERE Technologies as a data provider, you can't store results for locations in Japan by setting <code>IntendedUse</code> to <code>Storage</code>. parameter.</p> </li> <li> <p>Under the <code>MobileAssetTracking</code> or <code>MobilAssetManagement</code> pricing plan, you can't store results from your place index resources by setting <code>IntendedUse</code> to <code>Storage</code>. This returns a validation exception error.</p> </li> </ul> <p>For more information, see the <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a> for Amazon Location Service.</p> </important>
**/
public class UpdatePlaceIndexRequestBodyDataSourceConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IntendedUse")
    public openapisdk.models.shared.IntendedUseEnum intendedUse;
    public UpdatePlaceIndexRequestBodyDataSourceConfiguration withIntendedUse(openapisdk.models.shared.IntendedUseEnum intendedUse) {
        this.intendedUse = intendedUse;
        return this;
    }
}