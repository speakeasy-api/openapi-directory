import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateRadiusXAmzTargetEnum {
    DirectoryService20150416UpdateRadius = "DirectoryService_20150416.UpdateRadius"
}
export declare class UpdateRadiusRequest extends SpeakeasyBase {
    updateRadiusRequest: shared.UpdateRadiusRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateRadiusXAmzTargetEnum;
}
export declare class UpdateRadiusResponse extends SpeakeasyBase {
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
     * Success
     */
    updateRadiusResult?: Record<string, any>;
}
