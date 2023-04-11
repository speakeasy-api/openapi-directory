import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutResourceSetXAmzTargetEnum {
    AWSFMS20180101PutResourceSet = "AWSFMS_20180101.PutResourceSet"
}
export declare class PutResourceSetRequest extends SpeakeasyBase {
    putResourceSetRequest: shared.PutResourceSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutResourceSetXAmzTargetEnum;
}
export declare class PutResourceSetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * InvalidOperationException
     */
    invalidOperationException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * Success
     */
    putResourceSetResponse?: shared.PutResourceSetResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
