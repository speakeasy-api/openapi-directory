import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetProtectionStatusXAmzTargetEnum {
    AWSFMS20180101GetProtectionStatus = "AWSFMS_20180101.GetProtectionStatus"
}
export declare class GetProtectionStatusRequest extends SpeakeasyBase {
    getProtectionStatusRequest: shared.GetProtectionStatusRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetProtectionStatusXAmzTargetEnum;
}
export declare class GetProtectionStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getProtectionStatusResponse?: shared.GetProtectionStatusResponse;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
