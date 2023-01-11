import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The metadata options for the instance.
**/
export declare class ModifyInstanceMetadataOptionsResultInstanceMetadataOptions extends SpeakeasyBase {
    httpEndpoint?: Record<string, any>;
    httpProtocolIpv6?: Record<string, any>;
    httpPutResponseHopLimit?: Record<string, any>;
    httpTokens?: Record<string, any>;
    state?: Record<string, any>;
}
export declare class ModifyInstanceMetadataOptionsResult extends SpeakeasyBase {
    instanceId?: Record<string, any>;
    instanceMetadataOptions?: ModifyInstanceMetadataOptionsResultInstanceMetadataOptions;
}
