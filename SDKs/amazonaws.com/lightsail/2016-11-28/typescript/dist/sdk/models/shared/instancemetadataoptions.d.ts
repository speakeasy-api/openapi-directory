import { SpeakeasyBase } from "../../../internal/utils";
import { HttpEndpointEnum } from "./httpendpointenum";
import { HttpProtocolIpv6Enum } from "./httpprotocolipv6enum";
import { HttpTokensEnum } from "./httptokensenum";
import { InstanceMetadataStateEnum } from "./instancemetadatastateenum";
/**
 * The metadata options for the instance.
 */
export declare class InstanceMetadataOptions extends SpeakeasyBase {
    httpEndpoint?: HttpEndpointEnum;
    httpProtocolIpv6?: HttpProtocolIpv6Enum;
    httpPutResponseHopLimit?: number;
    httpTokens?: HttpTokensEnum;
    state?: InstanceMetadataStateEnum;
}
