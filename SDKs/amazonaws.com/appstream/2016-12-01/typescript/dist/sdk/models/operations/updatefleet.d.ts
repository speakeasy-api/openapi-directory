import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateFleetXAmzTargetEnum {
    PhotonAdminProxyServiceUpdateFleet = "PhotonAdminProxyService.UpdateFleet"
}
export declare class UpdateFleetRequest extends SpeakeasyBase {
    updateFleetRequest: shared.UpdateFleetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateFleetXAmzTargetEnum;
}
export declare class UpdateFleetResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * IncompatibleImageException
     */
    incompatibleImageException?: any;
    /**
     * InvalidAccountStatusException
     */
    invalidAccountStatusException?: any;
    /**
     * InvalidParameterCombinationException
     */
    invalidParameterCombinationException?: any;
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
     * ResourceNotAvailableException
     */
    resourceNotAvailableException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * RequestLimitExceededException
     */
    requestLimitExceededException?: any;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * Success
     */
    updateFleetResult?: shared.UpdateFleetResult;
}
