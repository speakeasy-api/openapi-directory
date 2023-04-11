import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateTrustXAmzTargetEnum {
    DirectoryService20150416UpdateTrust = "DirectoryService_20150416.UpdateTrust"
}
export declare class UpdateTrustRequest extends SpeakeasyBase {
    updateTrustRequest: shared.UpdateTrustRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateTrustXAmzTargetEnum;
}
export declare class UpdateTrustResponse extends SpeakeasyBase {
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
    updateTrustResult?: shared.UpdateTrustResult;
}
