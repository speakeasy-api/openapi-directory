import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisableClientAuthenticationXAmzTargetEnum {
    DirectoryService20150416DisableClientAuthentication = "DirectoryService_20150416.DisableClientAuthentication"
}
export declare class DisableClientAuthenticationRequest extends SpeakeasyBase {
    disableClientAuthenticationRequest: shared.DisableClientAuthenticationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisableClientAuthenticationXAmzTargetEnum;
}
export declare class DisableClientAuthenticationResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * DirectoryDoesNotExistException
     */
    directoryDoesNotExistException?: any;
    /**
     * Success
     */
    disableClientAuthenticationResult?: Record<string, any>;
    /**
     * InvalidClientAuthStatusException
     */
    invalidClientAuthStatusException?: any;
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
}
