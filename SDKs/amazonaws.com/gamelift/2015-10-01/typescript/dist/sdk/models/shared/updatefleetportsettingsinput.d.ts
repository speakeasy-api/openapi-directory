import { SpeakeasyBase } from "../../../internal/utils";
import { IpPermission } from "./ippermission";
export declare class UpdateFleetPortSettingsInput extends SpeakeasyBase {
    fleetId: string;
    inboundPermissionAuthorizations?: IpPermission[];
    inboundPermissionRevocations?: IpPermission[];
}
