package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVehiclesVehicleidInformationSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeUserAccessToken userAccessToken;
    public GetVehiclesVehicleidInformationSecurity withUserAccessToken(openapisdk.models.shared.SchemeUserAccessToken userAccessToken) {
        this.userAccessToken = userAccessToken;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeUserAccessToken userAccessToken1;
    public GetVehiclesVehicleidInformationSecurity withUserAccessToken1(openapisdk.models.shared.SchemeUserAccessToken userAccessToken1) {
        this.userAccessToken1 = userAccessToken1;
        return this;
    }
}