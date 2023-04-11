import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the parameters for DisableVgwRoutePropagation.
 */
export declare class DisableVgwRoutePropagationRequest extends SpeakeasyBase {
    dryRun?: boolean;
    gatewayId: string;
    routeTableId: string;
}
