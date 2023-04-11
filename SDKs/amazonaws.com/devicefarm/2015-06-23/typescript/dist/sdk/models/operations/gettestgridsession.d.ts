import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetTestGridSessionXAmzTargetEnum {
    DeviceFarm20150623GetTestGridSession = "DeviceFarm_20150623.GetTestGridSession"
}
export declare class GetTestGridSessionRequest extends SpeakeasyBase {
    getTestGridSessionRequest: shared.GetTestGridSessionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetTestGridSessionXAmzTargetEnum;
}
export declare class GetTestGridSessionResponse extends SpeakeasyBase {
    /**
     * ArgumentException
     */
    argumentException?: any;
    contentType: string;
    /**
     * Success
     */
    getTestGridSessionResult?: shared.GetTestGridSessionResult;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
