import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisableSsoXAmzTargetEnum {
    DirectoryService20150416DisableSso = "DirectoryService_20150416.DisableSso"
}
export declare class DisableSsoRequest extends SpeakeasyBase {
    disableSsoRequest: shared.DisableSsoRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisableSsoXAmzTargetEnum;
}
export declare class DisableSsoResponse extends SpeakeasyBase {
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
    disableSsoResult?: Record<string, any>;
    /**
     * EntityDoesNotExistException
     */
    entityDoesNotExistException?: any;
    /**
     * InsufficientPermissionsException
     */
    insufficientPermissionsException?: any;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
