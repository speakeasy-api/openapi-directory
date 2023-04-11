import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisableLDAPSXAmzTargetEnum {
    DirectoryService20150416DisableLDAPS = "DirectoryService_20150416.DisableLDAPS"
}
export declare class DisableLDAPSRequest extends SpeakeasyBase {
    disableLDAPSRequest: shared.DisableLDAPSRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisableLDAPSXAmzTargetEnum;
}
export declare class DisableLDAPSResponse extends SpeakeasyBase {
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
    disableLDAPSResult?: Record<string, any>;
    /**
     * InvalidLDAPSStatusException
     */
    invalidLDAPSStatusException?: any;
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
}
