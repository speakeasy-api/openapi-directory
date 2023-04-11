import { SpeakeasyBase } from "../../../internal/utils";
import { LaunchTemplateHttpTokensStateEnum } from "./launchtemplatehttptokensstateenum";
import { LaunchTemplateInstanceMetadataEndpointStateEnum } from "./launchtemplateinstancemetadataendpointstateenum";
import { LaunchTemplateInstanceMetadataProtocolIpv6Enum } from "./launchtemplateinstancemetadataprotocolipv6enum";
import { LaunchTemplateInstanceMetadataTagsStateEnum } from "./launchtemplateinstancemetadatatagsstateenum";
/**
 * The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance metadata and user data</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
 */
export declare class LaunchTemplateInstanceMetadataOptionsRequest extends SpeakeasyBase {
    httpEndpoint?: LaunchTemplateInstanceMetadataEndpointStateEnum;
    httpProtocolIpv6?: LaunchTemplateInstanceMetadataProtocolIpv6Enum;
    httpPutResponseHopLimit?: number;
    httpTokens?: LaunchTemplateHttpTokensStateEnum;
    instanceMetadataTags?: LaunchTemplateInstanceMetadataTagsStateEnum;
}
