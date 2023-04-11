import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETModifyInstanceMetadataOptionsActionEnum {
    ModifyInstanceMetadataOptions = "ModifyInstanceMetadataOptions"
}
/**
 * <p>Enables or disables the HTTP metadata endpoint on your instances. If this parameter is not specified, the existing state is maintained.</p> <p>If you specify a value of <code>disabled</code>, you cannot access your instance metadata.</p>
 */
export declare enum GETModifyInstanceMetadataOptionsHTTPEndpointEnum {
    Disabled = "disabled",
    Enabled = "enabled"
}
/**
 * Enables or disables the IPv6 endpoint for the instance metadata service. This setting applies only if you have enabled the HTTP metadata endpoint.
 */
export declare enum GETModifyInstanceMetadataOptionsHTTPProtocolIpv6Enum {
    Disabled = "disabled",
    Enabled = "enabled"
}
/**
 * <p>IMDSv2 uses token-backed sessions. Set the use of HTTP tokens to <code>optional</code> (in other words, set the use of IMDSv2 to <code>optional</code>) or <code>required</code> (in other words, set the use of IMDSv2 to <code>required</code>).</p> <ul> <li> <p> <code>optional</code> - When IMDSv2 is optional, you can choose to retrieve instance metadata with or without a session token in your request. If you retrieve the IAM role credentials without a token, the IMDSv1 role credentials are returned. If you retrieve the IAM role credentials using a valid session token, the IMDSv2 role credentials are returned.</p> </li> <li> <p> <code>required</code> - When IMDSv2 is required, you must send a session token with any instance metadata retrieval requests. In this state, retrieving the IAM role credentials always returns IMDSv2 credentials; IMDSv1 credentials are not available.</p> </li> </ul> <p>Default: <code>optional</code> </p>
 */
export declare enum GETModifyInstanceMetadataOptionsHTTPTokensEnum {
    Optional = "optional",
    Required = "required"
}
/**
 * <p>Set to <code>enabled</code> to allow access to instance tags from the instance metadata. Set to <code>disabled</code> to turn off access to instance tags from the instance metadata. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#work-with-tags-in-IMDS">Work with instance tags using the instance metadata</a>.</p> <p>Default: <code>disabled</code> </p>
 */
export declare enum GETModifyInstanceMetadataOptionsInstanceMetadataTagsEnum {
    Disabled = "disabled",
    Enabled = "enabled"
}
export declare enum GETModifyInstanceMetadataOptionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETModifyInstanceMetadataOptionsRequest extends SpeakeasyBase {
    action: GETModifyInstanceMetadataOptionsActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * <p>Enables or disables the HTTP metadata endpoint on your instances. If this parameter is not specified, the existing state is maintained.</p> <p>If you specify a value of <code>disabled</code>, you cannot access your instance metadata.</p>
     */
    httpEndpoint?: GETModifyInstanceMetadataOptionsHTTPEndpointEnum;
    /**
     * Enables or disables the IPv6 endpoint for the instance metadata service. This setting applies only if you have enabled the HTTP metadata endpoint.
     */
    httpProtocolIpv6?: GETModifyInstanceMetadataOptionsHTTPProtocolIpv6Enum;
    /**
     * <p>The desired HTTP PUT response hop limit for instance metadata requests. The larger the number, the further instance metadata requests can travel. If no parameter is specified, the existing state is maintained.</p> <p>Possible values: Integers from 1 to 64</p>
     */
    httpPutResponseHopLimit?: number;
    /**
     * <p>IMDSv2 uses token-backed sessions. Set the use of HTTP tokens to <code>optional</code> (in other words, set the use of IMDSv2 to <code>optional</code>) or <code>required</code> (in other words, set the use of IMDSv2 to <code>required</code>).</p> <ul> <li> <p> <code>optional</code> - When IMDSv2 is optional, you can choose to retrieve instance metadata with or without a session token in your request. If you retrieve the IAM role credentials without a token, the IMDSv1 role credentials are returned. If you retrieve the IAM role credentials using a valid session token, the IMDSv2 role credentials are returned.</p> </li> <li> <p> <code>required</code> - When IMDSv2 is required, you must send a session token with any instance metadata retrieval requests. In this state, retrieving the IAM role credentials always returns IMDSv2 credentials; IMDSv1 credentials are not available.</p> </li> </ul> <p>Default: <code>optional</code> </p>
     */
    httpTokens?: GETModifyInstanceMetadataOptionsHTTPTokensEnum;
    /**
     * The ID of the instance.
     */
    instanceId: string;
    /**
     * <p>Set to <code>enabled</code> to allow access to instance tags from the instance metadata. Set to <code>disabled</code> to turn off access to instance tags from the instance metadata. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#work-with-tags-in-IMDS">Work with instance tags using the instance metadata</a>.</p> <p>Default: <code>disabled</code> </p>
     */
    instanceMetadataTags?: GETModifyInstanceMetadataOptionsInstanceMetadataTagsEnum;
    version: GETModifyInstanceMetadataOptionsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyInstanceMetadataOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
