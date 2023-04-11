import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteRunXAmzTargetEnum {
    DeviceFarm20150623DeleteRun = "DeviceFarm_20150623.DeleteRun"
}
export declare class DeleteRunRequest extends SpeakeasyBase {
    deleteRunRequest: shared.DeleteRunRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteRunXAmzTargetEnum;
}
export declare class DeleteRunResponse extends SpeakeasyBase {
    /**
     * ArgumentException
     */
    argumentException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteRunResult?: Record<string, any>;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * ServiceAccountException
     */
    serviceAccountException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
