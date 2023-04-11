import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetTerminologyXAmzTargetEnum {
    AWSShineFrontendService20170701GetTerminology = "AWSShineFrontendService_20170701.GetTerminology"
}
export declare class GetTerminologyRequest extends SpeakeasyBase {
    getTerminologyRequest: shared.GetTerminologyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetTerminologyXAmzTargetEnum;
}
export declare class GetTerminologyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getTerminologyResponse?: shared.GetTerminologyResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
