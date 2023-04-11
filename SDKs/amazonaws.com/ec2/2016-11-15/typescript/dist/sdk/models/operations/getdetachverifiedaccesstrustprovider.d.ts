import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDetachVerifiedAccessTrustProviderActionEnum {
    DetachVerifiedAccessTrustProvider = "DetachVerifiedAccessTrustProvider"
}
export declare enum GETDetachVerifiedAccessTrustProviderVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETDetachVerifiedAccessTrustProviderRequest extends SpeakeasyBase {
    action: GETDetachVerifiedAccessTrustProviderActionEnum;
    /**
     * A unique, case-sensitive token that you provide to ensure idempotency of your modification request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.
     */
    clientToken?: string;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the Amazon Web Services Verified Access instance.
     */
    verifiedAccessInstanceId: string;
    /**
     * The ID of the Amazon Web Services Verified Access trust provider.
     */
    verifiedAccessTrustProviderId: string;
    version: GETDetachVerifiedAccessTrustProviderVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDetachVerifiedAccessTrustProviderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
