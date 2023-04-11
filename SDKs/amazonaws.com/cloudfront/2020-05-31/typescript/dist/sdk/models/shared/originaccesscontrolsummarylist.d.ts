import { SpeakeasyBase } from "../../../internal/utils";
import { OriginAccessControlOriginTypesEnum } from "./originaccesscontrolorigintypesenum";
import { OriginAccessControlSigningBehaviorsEnum } from "./originaccesscontrolsigningbehaviorsenum";
import { OriginAccessControlSigningProtocolsEnum } from "./originaccesscontrolsigningprotocolsenum";
/**
 * A CloudFront origin access control.
 */
export declare class OriginAccessControlSummaryList extends SpeakeasyBase {
    description: string;
    id: string;
    name: string;
    originAccessControlOriginType: OriginAccessControlOriginTypesEnum;
    signingBehavior: OriginAccessControlSigningBehaviorsEnum;
    signingProtocol: OriginAccessControlSigningProtocolsEnum;
}
