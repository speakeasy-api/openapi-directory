import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetDirectoryLimitsXAmzTargetEnum {
    DirectoryService20150416GetDirectoryLimits = "DirectoryService_20150416.GetDirectoryLimits"
}
export declare class GetDirectoryLimitsRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDirectoryLimitsXAmzTargetEnum;
}
export declare class GetDirectoryLimitsResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * EntityDoesNotExistException
     */
    entityDoesNotExistException?: any;
    /**
     * Success
     */
    getDirectoryLimitsResult?: shared.GetDirectoryLimitsResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceException
     */
    serviceException?: any;
}
