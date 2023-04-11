import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Indicates whether the HTTP metadata endpoint on your instances is enabled or disabled.</p> <p>If the value is <code>disabled</code>, you cannot access your instance metadata.</p>
 */
export declare enum ModifyInstanceMetadataOptionsResultInstanceMetadataOptionsHttpEndpointEnum {
    Disabled = "disabled",
    Enabled = "enabled"
}
/**
 * Indicates whether the IPv6 endpoint for the instance metadata service is enabled or disabled.
 */
export declare enum ModifyInstanceMetadataOptionsResultInstanceMetadataOptionsHttpProtocolIpv6Enum {
    Disabled = "disabled",
    Enabled = "enabled"
}
/**
 * <p>IMDSv2 uses token-backed sessions. Indicates whether the use of HTTP tokens is <code>optional</code> (in other words, indicates whether the use of IMDSv2 is <code>optional</code>) or <code>required</code> (in other words, indicates whether the use of IMDSv2 is <code>required</code>).</p> <ul> <li> <p> <code>optional</code> - When IMDSv2 is optional, you can choose to retrieve instance metadata with or without a session token in your request. If you retrieve the IAM role credentials without a token, the IMDSv1 role credentials are returned. If you retrieve the IAM role credentials using a valid session token, the IMDSv2 role credentials are returned.</p> </li> <li> <p> <code>required</code> - When IMDSv2 is required, you must send a session token with any instance metadata retrieval requests. In this state, retrieving the IAM role credentials always returns IMDSv2 credentials; IMDSv1 credentials are not available.</p> </li> </ul> <p>Default: <code>optional</code> </p>
 */
export declare enum ModifyInstanceMetadataOptionsResultInstanceMetadataOptionsHttpTokensEnum {
    Optional = "optional",
    Required = "required"
}
/**
 * Indicates whether access to instance tags from the instance metadata is enabled or disabled. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#work-with-tags-in-IMDS">Work with instance tags using the instance metadata</a>.
 */
export declare enum ModifyInstanceMetadataOptionsResultInstanceMetadataOptionsInstanceMetadataTagsEnum {
    Disabled = "disabled",
    Enabled = "enabled"
}
/**
 * <p>The state of the metadata option changes.</p> <p> <code>pending</code> - The metadata options are being updated and the instance is not ready to process metadata traffic with the new selection.</p> <p> <code>applied</code> - The metadata options have been successfully applied on the instance.</p>
 */
export declare enum ModifyInstanceMetadataOptionsResultInstanceMetadataOptionsStateEnum {
    Pending = "pending",
    Applied = "applied"
}
/**
 * The metadata options for the instance.
 */
export declare class ModifyInstanceMetadataOptionsResultInstanceMetadataOptions extends SpeakeasyBase {
    httpEndpoint?: ModifyInstanceMetadataOptionsResultInstanceMetadataOptionsHttpEndpointEnum;
    httpProtocolIpv6?: ModifyInstanceMetadataOptionsResultInstanceMetadataOptionsHttpProtocolIpv6Enum;
    httpPutResponseHopLimit?: number;
    httpTokens?: ModifyInstanceMetadataOptionsResultInstanceMetadataOptionsHttpTokensEnum;
    instanceMetadataTags?: ModifyInstanceMetadataOptionsResultInstanceMetadataOptionsInstanceMetadataTagsEnum;
    state?: ModifyInstanceMetadataOptionsResultInstanceMetadataOptionsStateEnum;
}
/**
 * Success
 */
export declare class ModifyInstanceMetadataOptionsResult extends SpeakeasyBase {
    instanceId?: string;
    instanceMetadataOptions?: ModifyInstanceMetadataOptionsResultInstanceMetadataOptions;
}
