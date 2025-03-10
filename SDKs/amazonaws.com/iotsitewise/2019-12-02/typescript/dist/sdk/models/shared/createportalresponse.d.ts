import { SpeakeasyBase } from "../../../internal/utils";
import { PortalStatus } from "./portalstatus";
/**
 * Success
 */
export declare class CreatePortalResponse extends SpeakeasyBase {
    portalArn: string;
    portalId: string;
    portalStartUrl: string;
    portalStatus: PortalStatus;
    ssoApplicationId: string;
}
