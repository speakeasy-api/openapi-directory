import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateInstanceMetadataOptionsXAmzTargetEnum {
    Lightsail20161128UpdateInstanceMetadataOptions = "Lightsail_20161128.UpdateInstanceMetadataOptions"
}
export declare class UpdateInstanceMetadataOptionsRequest extends SpeakeasyBase {
    updateInstanceMetadataOptionsRequest: shared.UpdateInstanceMetadataOptionsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateInstanceMetadataOptionsXAmzTargetEnum;
}
export declare class UpdateInstanceMetadataOptionsResponse extends SpeakeasyBase {
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceException
     */
    serviceException?: any;
    /**
     * UnauthenticatedException
     */
    unauthenticatedException?: any;
    /**
     * Success
     */
    updateInstanceMetadataOptionsResult?: shared.UpdateInstanceMetadataOptionsResult;
}
