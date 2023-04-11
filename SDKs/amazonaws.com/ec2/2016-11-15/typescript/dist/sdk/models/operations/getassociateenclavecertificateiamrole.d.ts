import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETAssociateEnclaveCertificateIamRoleActionEnum {
    AssociateEnclaveCertificateIamRole = "AssociateEnclaveCertificateIamRole"
}
export declare enum GETAssociateEnclaveCertificateIamRoleVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETAssociateEnclaveCertificateIamRoleRequest extends SpeakeasyBase {
    action: GETAssociateEnclaveCertificateIamRoleActionEnum;
    /**
     * The ARN of the ACM certificate with which to associate the IAM role.
     */
    certificateArn: string;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ARN of the IAM role to associate with the ACM certificate. You can associate up to 16 IAM roles with an ACM certificate.
     */
    roleArn: string;
    version: GETAssociateEnclaveCertificateIamRoleVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETAssociateEnclaveCertificateIamRoleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
