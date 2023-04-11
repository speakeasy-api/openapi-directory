import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutRemediationExceptionsXAmzTargetEnum {
    StarlingDoveServicePutRemediationExceptions = "StarlingDoveService.PutRemediationExceptions"
}
export declare class PutRemediationExceptionsRequest extends SpeakeasyBase {
    putRemediationExceptionsRequest: shared.PutRemediationExceptionsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutRemediationExceptionsXAmzTargetEnum;
}
export declare class PutRemediationExceptionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InsufficientPermissionsException
     */
    insufficientPermissionsException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * Success
     */
    putRemediationExceptionsResponse?: shared.PutRemediationExceptionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
