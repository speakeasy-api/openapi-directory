import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeauthorizeConnectionXAmzTargetEnum {
    AWSEventsDeauthorizeConnection = "AWSEvents.DeauthorizeConnection"
}
export declare class DeauthorizeConnectionRequest extends SpeakeasyBase {
    deauthorizeConnectionRequest: shared.DeauthorizeConnectionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeauthorizeConnectionXAmzTargetEnum;
}
export declare class DeauthorizeConnectionResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * Success
     */
    deauthorizeConnectionResponse?: shared.DeauthorizeConnectionResponse;
    /**
     * InternalException
     */
    internalException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
