import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateSystemInstanceXAmzTargetEnum {
    IotThingsGraphFrontEndServiceCreateSystemInstance = "IotThingsGraphFrontEndService.CreateSystemInstance"
}
export declare class CreateSystemInstanceRequest extends SpeakeasyBase {
    createSystemInstanceRequest: shared.CreateSystemInstanceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateSystemInstanceXAmzTargetEnum;
}
export declare class CreateSystemInstanceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createSystemInstanceResponse?: shared.CreateSystemInstanceResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
