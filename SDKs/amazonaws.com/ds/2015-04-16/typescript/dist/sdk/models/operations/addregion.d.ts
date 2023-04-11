import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AddRegionXAmzTargetEnum {
    DirectoryService20150416AddRegion = "DirectoryService_20150416.AddRegion"
}
export declare class AddRegionRequest extends SpeakeasyBase {
    addRegionRequest: shared.AddRegionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddRegionXAmzTargetEnum;
}
export declare class AddRegionResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    addRegionResult?: Record<string, any>;
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * DirectoryAlreadyInRegionException
     */
    directoryAlreadyInRegionException?: any;
    /**
     * DirectoryDoesNotExistException
     */
    directoryDoesNotExistException?: any;
    /**
     * DirectoryUnavailableException
     */
    directoryUnavailableException?: any;
    /**
     * EntityDoesNotExistException
     */
    entityDoesNotExistException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * RegionLimitExceededException
     */
    regionLimitExceededException?: any;
    /**
     * ServiceException
     */
    serviceException?: any;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
