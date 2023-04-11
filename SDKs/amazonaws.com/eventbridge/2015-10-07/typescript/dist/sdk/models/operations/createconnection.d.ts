import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateConnectionXAmzTargetEnum {
    AWSEventsCreateConnection = "AWSEvents.CreateConnection"
}
export declare class CreateConnectionRequest extends SpeakeasyBase {
    createConnectionRequest: shared.CreateConnectionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateConnectionXAmzTargetEnum;
}
export declare class CreateConnectionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createConnectionResponse?: shared.CreateConnectionResponse;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
