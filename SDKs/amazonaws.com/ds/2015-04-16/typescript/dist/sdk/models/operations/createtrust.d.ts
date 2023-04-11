import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateTrustXAmzTargetEnum {
    DirectoryService20150416CreateTrust = "DirectoryService_20150416.CreateTrust"
}
export declare class CreateTrustRequest extends SpeakeasyBase {
    createTrustRequest: shared.CreateTrustRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateTrustXAmzTargetEnum;
}
export declare class CreateTrustResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * Success
     */
    createTrustResult?: shared.CreateTrustResult;
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
