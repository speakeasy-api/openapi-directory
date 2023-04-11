import { SpeakeasyBase } from "../../../internal/utils";
import { HttpTokensStateEnum } from "./httptokensstateenum";
import { InstanceMetadataEndpointStateEnum } from "./instancemetadataendpointstateenum";
import { InstanceMetadataProtocolStateEnum } from "./instancemetadataprotocolstateenum";
import { InstanceMetadataTagsStateEnum } from "./instancemetadatatagsstateenum";
/**
 * The metadata options for the instance.
 */
export declare class InstanceMetadataOptionsRequest extends SpeakeasyBase {
    httpEndpoint?: InstanceMetadataEndpointStateEnum;
    httpProtocolIpv6?: InstanceMetadataProtocolStateEnum;
    httpPutResponseHopLimit?: number;
    httpTokens?: HttpTokensStateEnum;
    instanceMetadataTags?: InstanceMetadataTagsStateEnum;
}
