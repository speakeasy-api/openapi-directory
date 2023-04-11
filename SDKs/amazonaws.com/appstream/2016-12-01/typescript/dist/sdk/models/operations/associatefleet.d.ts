import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateFleetXAmzTargetEnum {
    PhotonAdminProxyServiceAssociateFleet = "PhotonAdminProxyService.AssociateFleet"
}
export declare class AssociateFleetRequest extends SpeakeasyBase {
    associateFleetRequest: shared.AssociateFleetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateFleetXAmzTargetEnum;
}
export declare class AssociateFleetResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associateFleetResult?: Record<string, any>;
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
