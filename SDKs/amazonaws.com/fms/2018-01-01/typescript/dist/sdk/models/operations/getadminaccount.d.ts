import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetAdminAccountXAmzTargetEnum {
    AWSFMS20180101GetAdminAccount = "AWSFMS_20180101.GetAdminAccount"
}
export declare class GetAdminAccountRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAdminAccountXAmzTargetEnum;
}
export declare class GetAdminAccountResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getAdminAccountResponse?: shared.GetAdminAccountResponse;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidOperationException
     */
    invalidOperationException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
