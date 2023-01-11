package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListInputRoutingsRequestBodyInputIdentifier
 *  The identifer of the input. 
**/
public class ListInputRoutingsRequestBodyInputIdentifier {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iotEventsInputIdentifier")
    public openapisdk.models.shared.IotEventsInputIdentifier iotEventsInputIdentifier;
    public ListInputRoutingsRequestBodyInputIdentifier withIotEventsInputIdentifier(openapisdk.models.shared.IotEventsInputIdentifier iotEventsInputIdentifier) {
        this.iotEventsInputIdentifier = iotEventsInputIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iotSiteWiseInputIdentifier")
    public openapisdk.models.shared.IotSiteWiseInputIdentifier iotSiteWiseInputIdentifier;
    public ListInputRoutingsRequestBodyInputIdentifier withIotSiteWiseInputIdentifier(openapisdk.models.shared.IotSiteWiseInputIdentifier iotSiteWiseInputIdentifier) {
        this.iotSiteWiseInputIdentifier = iotSiteWiseInputIdentifier;
        return this;
    }
}