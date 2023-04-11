import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ClaimDevicesByClaimCodeRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The claim code, starting with "C-", as provided by the device manufacturer.
     */
    claimCode: string;
}
export declare class ClaimDevicesByClaimCodeResponse extends SpeakeasyBase {
    /**
     * Success
     */
    claimDevicesByClaimCodeResponse?: shared.ClaimDevicesByClaimCodeResponse;
    contentType: string;
    /**
     * ForbiddenException
     */
    forbiddenException?: any;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
