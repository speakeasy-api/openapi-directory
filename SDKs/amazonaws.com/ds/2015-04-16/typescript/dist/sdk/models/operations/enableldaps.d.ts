import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum EnableLDAPSXAmzTargetEnum {
    DirectoryService20150416EnableLDAPS = "DirectoryService_20150416.EnableLDAPS"
}
export declare class EnableLDAPSRequest extends SpeakeasyBase {
    enableLDAPSRequest: shared.EnableLDAPSRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: EnableLDAPSXAmzTargetEnum;
}
export declare class EnableLDAPSResponse extends SpeakeasyBase {
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
     * DirectoryUnavailableException
     */
    directoryUnavailableException?: any;
    /**
     * Success
     */
    enableLDAPSResult?: Record<string, any>;
    /**
     * InvalidLDAPSStatusException
     */
    invalidLDAPSStatusException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * NoAvailableCertificateException
     */
    noAvailableCertificateException?: any;
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
