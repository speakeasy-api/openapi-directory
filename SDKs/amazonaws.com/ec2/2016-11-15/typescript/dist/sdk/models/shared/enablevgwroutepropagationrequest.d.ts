import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the parameters for EnableVgwRoutePropagation.
 */
export declare class EnableVgwRoutePropagationRequest extends SpeakeasyBase {
    dryRun?: boolean;
    gatewayId: string;
    routeTableId: string;
}
