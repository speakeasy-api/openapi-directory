import { SpeakeasyBase } from "../../../internal/utils";
import { GatewayTypeEnum } from "./gatewaytypeenum";
import { Tag } from "./tag";
export declare class CreateGatewayInput extends SpeakeasyBase {
    activationKey: string;
    gatewayDisplayName: string;
    gatewayType: GatewayTypeEnum;
    tags?: Tag[];
}
