import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETModifyVerifiedAccessInstanceActionEnum {
    ModifyVerifiedAccessInstance = "ModifyVerifiedAccessInstance"
}
export declare enum GETModifyVerifiedAccessInstanceVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETModifyVerifiedAccessInstanceRequest extends SpeakeasyBase {
    action: GETModifyVerifiedAccessInstanceActionEnum;
    /**
     * A unique, case-sensitive token that you provide to ensure idempotency of your modification request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.
     */
    clientToken?: string;
    /**
     * A description for the Amazon Web Services Verified Access instance.
     */
    description?: string;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the Amazon Web Services Verified Access instance.
     */
    verifiedAccessInstanceId: string;
    version: GETModifyVerifiedAccessInstanceVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyVerifiedAccessInstanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
