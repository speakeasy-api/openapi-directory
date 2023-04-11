import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisableRadiusXAmzTargetEnum {
    DirectoryService20150416DisableRadius = "DirectoryService_20150416.DisableRadius"
}
export declare class DisableRadiusRequest extends SpeakeasyBase {
    disableRadiusRequest: shared.DisableRadiusRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisableRadiusXAmzTargetEnum;
}
export declare class DisableRadiusResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * Success
     */
    disableRadiusResult?: Record<string, any>;
    /**
     * EntityDoesNotExistException
     */
    entityDoesNotExistException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceException
     */
    serviceException?: any;
}
