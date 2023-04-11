import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateApplicationFleetXAmzTargetEnum {
    PhotonAdminProxyServiceAssociateApplicationFleet = "PhotonAdminProxyService.AssociateApplicationFleet"
}
export declare class AssociateApplicationFleetRequest extends SpeakeasyBase {
    associateApplicationFleetRequest: shared.AssociateApplicationFleetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateApplicationFleetXAmzTargetEnum;
}
export declare class AssociateApplicationFleetResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associateApplicationFleetResult?: shared.AssociateApplicationFleetResult;
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * InvalidParameterCombinationException
     */
    invalidParameterCombinationException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
