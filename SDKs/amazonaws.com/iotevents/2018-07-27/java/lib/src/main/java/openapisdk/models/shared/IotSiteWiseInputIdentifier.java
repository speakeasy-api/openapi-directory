package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IotSiteWiseInputIdentifier
 *  The identifer of the input routed from AWS IoT SiteWise. 
**/
public class IotSiteWiseInputIdentifier {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iotSiteWiseAssetModelPropertyIdentifier")
    public IotSiteWiseAssetModelPropertyIdentifier iotSiteWiseAssetModelPropertyIdentifier;
    public IotSiteWiseInputIdentifier withIotSiteWiseAssetModelPropertyIdentifier(IotSiteWiseAssetModelPropertyIdentifier iotSiteWiseAssetModelPropertyIdentifier) {
        this.iotSiteWiseAssetModelPropertyIdentifier = iotSiteWiseAssetModelPropertyIdentifier;
        return this;
    }
}