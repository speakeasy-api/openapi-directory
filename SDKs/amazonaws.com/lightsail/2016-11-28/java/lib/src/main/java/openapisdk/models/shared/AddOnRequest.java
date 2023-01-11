package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddOnRequest
 * <p>Describes a request to enable, modify, or disable an add-on for an Amazon Lightsail resource.</p> <note> <p>An additional cost may be associated with enabling add-ons. For more information, see the <a href="https://aws.amazon.com/lightsail/pricing/">Lightsail pricing page</a>.</p> </note>
**/
public class AddOnRequest {
    @JsonProperty("addOnType")
    public AddOnTypeEnum addOnType;
    public AddOnRequest withAddOnType(AddOnTypeEnum addOnType) {
        this.addOnType = addOnType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoSnapshotAddOnRequest")
    public AutoSnapshotAddOnRequest autoSnapshotAddOnRequest;
    public AddOnRequest withAutoSnapshotAddOnRequest(AutoSnapshotAddOnRequest autoSnapshotAddOnRequest) {
        this.autoSnapshotAddOnRequest = autoSnapshotAddOnRequest;
        return this;
    }
}