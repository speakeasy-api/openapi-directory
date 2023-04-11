import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteDiskXAmzTargetEnum {
    Lightsail20161128DeleteDisk = "Lightsail_20161128.DeleteDisk"
}
export declare class DeleteDiskRequest extends SpeakeasyBase {
    deleteDiskRequest: shared.DeleteDiskRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDiskXAmzTargetEnum;
}
export declare class DeleteDiskResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * AccountSetupInProgressException
     */
    accountSetupInProgressException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteDiskResult?: shared.DeleteDiskResult;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * OperationFailureException
     */
    operationFailureException?: any;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthenticatedException
     */
    unauthenticatedException?: any;
}
