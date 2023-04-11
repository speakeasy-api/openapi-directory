import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateSubnetChangeProtectionXAmzTargetEnum {
    NetworkFirewall20201112UpdateSubnetChangeProtection = "NetworkFirewall_20201112.UpdateSubnetChangeProtection"
}
export declare class UpdateSubnetChangeProtectionRequest extends SpeakeasyBase {
    updateSubnetChangeProtectionRequest: shared.UpdateSubnetChangeProtectionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateSubnetChangeProtectionXAmzTargetEnum;
}
export declare class UpdateSubnetChangeProtectionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * InvalidTokenException
     */
    invalidTokenException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceOwnerCheckException
     */
    resourceOwnerCheckException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateSubnetChangeProtectionResponse?: shared.UpdateSubnetChangeProtectionResponse;
}
