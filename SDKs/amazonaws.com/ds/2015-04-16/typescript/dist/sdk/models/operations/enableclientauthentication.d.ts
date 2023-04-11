import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum EnableClientAuthenticationXAmzTargetEnum {
    DirectoryService20150416EnableClientAuthentication = "DirectoryService_20150416.EnableClientAuthentication"
}
export declare class EnableClientAuthenticationRequest extends SpeakeasyBase {
    enableClientAuthenticationRequest: shared.EnableClientAuthenticationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: EnableClientAuthenticationXAmzTargetEnum;
}
export declare class EnableClientAuthenticationResponse extends SpeakeasyBase {
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
    enableClientAuthenticationResult?: Record<string, any>;
    /**
     * InvalidClientAuthStatusException
     */
    invalidClientAuthStatusException?: any;
    /**
     * NoAvailableCertificateException
     */
    noAvailableCertificateException?: any;
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
