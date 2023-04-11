import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListPermissionsXAmzTargetEnum {
    ACMPrivateCAListPermissions = "ACMPrivateCA.ListPermissions"
}
export declare class ListPermissionsRequest extends SpeakeasyBase {
    listPermissionsRequest: shared.ListPermissionsRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListPermissionsXAmzTargetEnum;
}
export declare class ListPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidArnException
     */
    invalidArnException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * InvalidStateException
     */
    invalidStateException?: any;
    /**
     * Success
     */
    listPermissionsResponse?: shared.ListPermissionsResponse;
    /**
     * RequestFailedException
     */
    requestFailedException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
