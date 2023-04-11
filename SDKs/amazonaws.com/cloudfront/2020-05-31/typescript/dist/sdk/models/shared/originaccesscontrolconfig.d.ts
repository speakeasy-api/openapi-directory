import { SpeakeasyBase } from "../../../internal/utils";
import { OriginAccessControlOriginTypesEnum } from "./originaccesscontrolorigintypesenum";
import { OriginAccessControlSigningBehaviorsEnum } from "./originaccesscontrolsigningbehaviorsenum";
import { OriginAccessControlSigningProtocolsEnum } from "./originaccesscontrolsigningprotocolsenum";
/**
 * A CloudFront origin access control configuration.
 */
export declare class OriginAccessControlConfig extends SpeakeasyBase {
    description?: string;
    name: string;
    originAccessControlOriginType: OriginAccessControlOriginTypesEnum;
    signingBehavior: OriginAccessControlSigningBehaviorsEnum;
    signingProtocol: OriginAccessControlSigningProtocolsEnum;
}
