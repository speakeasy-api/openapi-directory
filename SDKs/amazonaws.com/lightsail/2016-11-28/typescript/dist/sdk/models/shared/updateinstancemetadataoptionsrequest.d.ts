import { SpeakeasyBase } from "../../../internal/utils";
import { HttpEndpointEnum } from "./httpendpointenum";
import { HttpProtocolIpv6Enum } from "./httpprotocolipv6enum";
import { HttpTokensEnum } from "./httptokensenum";
export declare class UpdateInstanceMetadataOptionsRequest extends SpeakeasyBase {
    httpEndpoint?: HttpEndpointEnum;
    httpProtocolIpv6?: HttpProtocolIpv6Enum;
    httpPutResponseHopLimit?: number;
    httpTokens?: HttpTokensEnum;
    instanceName: string;
}
