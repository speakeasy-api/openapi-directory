import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartFleetXAmzTargetEnum {
    PhotonAdminProxyServiceStartFleet = "PhotonAdminProxyService.StartFleet"
}
export declare class StartFleetRequest extends SpeakeasyBase {
    startFleetRequest: shared.StartFleetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartFleetXAmzTargetEnum;
}
export declare class StartFleetResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * InvalidAccountStatusException
     */
    invalidAccountStatusException?: any;
    /**
     * InvalidRoleException
     */
    invalidRoleException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    /**
     * RequestLimitExceededException
     */
    requestLimitExceededException?: any;
    /**
     * ResourceNotAvailableException
     */
    resourceNotAvailableException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    startFleetResult?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
