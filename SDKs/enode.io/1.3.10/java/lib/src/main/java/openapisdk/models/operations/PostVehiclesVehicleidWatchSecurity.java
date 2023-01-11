package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostVehiclesVehicleidWatchSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeUserAccessToken userAccessToken;
    public PostVehiclesVehicleidWatchSecurity withUserAccessToken(openapisdk.models.shared.SchemeUserAccessToken userAccessToken) {
        this.userAccessToken = userAccessToken;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeUserAccessToken userAccessToken1;
    public PostVehiclesVehicleidWatchSecurity withUserAccessToken1(openapisdk.models.shared.SchemeUserAccessToken userAccessToken1) {
        this.userAccessToken1 = userAccessToken1;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeUserAccessToken userAccessToken2;
    public PostVehiclesVehicleidWatchSecurity withUserAccessToken2(openapisdk.models.shared.SchemeUserAccessToken userAccessToken2) {
        this.userAccessToken2 = userAccessToken2;
        return this;
    }
}