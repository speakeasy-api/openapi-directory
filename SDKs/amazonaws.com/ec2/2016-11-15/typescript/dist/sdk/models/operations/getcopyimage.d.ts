import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETCopyImageActionEnum {
    CopyImage = "CopyImage"
}
export declare enum GETCopyImageVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETCopyImageRequest extends SpeakeasyBase {
    action: GETCopyImageActionEnum;
    /**
     * Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a> in the <i>Amazon EC2 API Reference</i>.
     */
    clientToken?: string;
    /**
     * <p>Indicates whether to include your user-defined AMI tags when copying the AMI.</p> <p>The following tags will not be copied:</p> <ul> <li> <p>System tags (prefixed with <code>aws:</code>)</p> </li> <li> <p>For public and shared AMIs, user-defined tags that are attached by other Amazon Web Services accounts</p> </li> </ul> <p>Default: Your user-defined AMI tags are not copied.</p>
     */
    copyImageTags?: boolean;
    /**
     * A description for the new AMI in the destination Region.
     */
    description?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the Outpost to which to copy the AMI. Only specify this parameter when copying an AMI from an Amazon Web Services Region to an Outpost. The AMI must be in the Region of the destination Outpost. You cannot copy an AMI from an Outpost to a Region, from one Outpost to another, or within the same Outpost.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshots-outposts.html#copy-amis"> Copy AMIs from an Amazon Web Services Region to an Outpost</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    destinationOutpostArn?: string;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * Specifies whether the destination snapshots of the copied image should be encrypted. You can encrypt a copy of an unencrypted snapshot, but you cannot create an unencrypted copy of an encrypted snapshot. The default KMS key for Amazon EBS is used unless you specify a non-default Key Management Service (KMS) KMS key using <code>KmsKeyId</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a> in the <i>Amazon EC2 User Guide</i>.
     */
    encrypted?: boolean;
    /**
     * <p>The identifier of the symmetric Key Management Service (KMS) KMS key to use when creating encrypted volumes. If this parameter is not specified, your Amazon Web Services managed KMS key for Amazon EBS is used. If you specify a KMS key, you must also set the encrypted state to <code>true</code>.</p> <p>You can specify a KMS key using any of the following:</p> <ul> <li> <p>Key ID. For example, 1234abcd-12ab-34cd-56ef-1234567890ab.</p> </li> <li> <p>Key alias. For example, alias/ExampleAlias.</p> </li> <li> <p>Key ARN. For example, arn:aws:kms:us-east-1:012345678910:key/1234abcd-12ab-34cd-56ef-1234567890ab.</p> </li> <li> <p>Alias ARN. For example, arn:aws:kms:us-east-1:012345678910:alias/ExampleAlias.</p> </li> </ul> <p>Amazon Web Services authenticates the KMS key asynchronously. Therefore, if you specify an identifier that is not valid, the action can appear to complete, but eventually fails.</p> <p>The specified KMS key must exist in the destination Region.</p> <p>Amazon EBS does not support asymmetric KMS keys.</p>
     */
    kmsKeyId?: string;
    /**
     * The name of the new AMI in the destination Region.
     */
    name: string;
    /**
     * The ID of the AMI to copy.
     */
    sourceImageId: string;
    /**
     * The name of the Region that contains the AMI to copy.
     */
    sourceRegion: string;
    version: GETCopyImageVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETCopyImageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
