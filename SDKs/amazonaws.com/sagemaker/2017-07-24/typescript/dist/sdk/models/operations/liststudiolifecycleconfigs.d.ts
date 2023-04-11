import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListStudioLifecycleConfigsXAmzTargetEnum {
    SageMakerListStudioLifecycleConfigs = "SageMaker.ListStudioLifecycleConfigs"
}
export declare class ListStudioLifecycleConfigsRequest extends SpeakeasyBase {
    listStudioLifecycleConfigsRequest: shared.ListStudioLifecycleConfigsRequest;
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
    xAmzTarget: ListStudioLifecycleConfigsXAmzTargetEnum;
}
export declare class ListStudioLifecycleConfigsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listStudioLifecycleConfigsResponse?: shared.ListStudioLifecycleConfigsResponse;
    /**
     * ResourceInUse
     */
    resourceInUse?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
