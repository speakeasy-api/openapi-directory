import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Metadata options that allow you to configure and secure the Amazon EC2 instance.
 */
export declare class AwsEc2InstanceMetadataOptions extends SpeakeasyBase {
    httpEndpoint?: string;
    httpProtocolIpv6?: string;
    httpPutResponseHopLimit?: number;
    httpTokens?: string;
    instanceMetadataTags?: string;
}
