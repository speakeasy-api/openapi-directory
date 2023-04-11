import { SpeakeasyBase } from "../../../internal/utils";
import { HttpTokensStateEnum } from "./httptokensstateenum";
import { InstanceMetadataEndpointStateEnum } from "./instancemetadataendpointstateenum";
import { InstanceMetadataProtocolStateEnum } from "./instancemetadataprotocolstateenum";
import { InstanceMetadataTagsStateEnum } from "./instancemetadatatagsstateenum";
export declare class ModifyInstanceMetadataOptionsRequest extends SpeakeasyBase {
    dryRun?: boolean;
    httpEndpoint?: InstanceMetadataEndpointStateEnum;
    httpProtocolIpv6?: InstanceMetadataProtocolStateEnum;
    httpPutResponseHopLimit?: number;
    httpTokens?: HttpTokensStateEnum;
    instanceId: string;
    instanceMetadataTags?: InstanceMetadataTagsStateEnum;
}
