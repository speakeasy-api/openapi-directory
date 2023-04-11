import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateNumberOfDomainControllersXAmzTargetEnum {
    DirectoryService20150416UpdateNumberOfDomainControllers = "DirectoryService_20150416.UpdateNumberOfDomainControllers"
}
export declare class UpdateNumberOfDomainControllersRequest extends SpeakeasyBase {
    updateNumberOfDomainControllersRequest: shared.UpdateNumberOfDomainControllersRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateNumberOfDomainControllersXAmzTargetEnum;
}
export declare class UpdateNumberOfDomainControllersResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * DirectoryUnavailableException
     */
    directoryUnavailableException?: any;
    /**
     * DomainControllerLimitExceededException
     */
    domainControllerLimitExceededException?: any;
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
     * ServiceException
     */
    serviceException?: any;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
    /**
     * Success
     */
    updateNumberOfDomainControllersResult?: Record<string, any>;
}
