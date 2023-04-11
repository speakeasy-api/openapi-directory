import { SpeakeasyBase } from "../../../internal/utils";
import { ClientModeEnum } from "./clientmodeenum";
import { DestinationConfig } from "./destinationconfig";
export declare class RotateTunnelAccessTokenRequest extends SpeakeasyBase {
    clientMode: ClientModeEnum;
    /**
     * The destination configuration.
     */
    destinationConfig?: DestinationConfig;
    tunnelId: string;
}
