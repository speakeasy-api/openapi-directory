import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateComputerXAmzTargetEnum {
    DirectoryService20150416CreateComputer = "DirectoryService_20150416.CreateComputer"
}
export declare class CreateComputerRequest extends SpeakeasyBase {
    createComputerRequest: shared.CreateComputerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateComputerXAmzTargetEnum;
}
export declare class CreateComputerResponse extends SpeakeasyBase {
    /**
     * AuthenticationFailedException
     */
    authenticationFailedException?: any;
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * Success
     */
    createComputerResult?: shared.CreateComputerResult;
    /**
     * DirectoryUnavailableException
     */
    directoryUnavailableException?: any;
    /**
     * EntityAlreadyExistsException
     */
    entityAlreadyExistsException?: any;
    /**
     * EntityDoesNotExistException
     */
    entityDoesNotExistException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
