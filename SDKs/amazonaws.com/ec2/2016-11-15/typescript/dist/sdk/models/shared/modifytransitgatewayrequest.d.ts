import { SpeakeasyBase } from "../../../internal/utils";
import { ModifyTransitGatewayOptions } from "./modifytransitgatewayoptions";
export declare class ModifyTransitGatewayRequest extends SpeakeasyBase {
    description?: string;
    dryRun?: boolean;
    options?: ModifyTransitGatewayOptions;
    transitGatewayId: string;
}
