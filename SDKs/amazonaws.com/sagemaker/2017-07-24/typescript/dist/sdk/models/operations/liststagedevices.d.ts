import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListStageDevicesXAmzTargetEnum {
    SageMakerListStageDevices = "SageMaker.ListStageDevices"
}
export declare class ListStageDevicesRequest extends SpeakeasyBase {
    listStageDevicesRequest: shared.ListStageDevicesRequest;
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
    xAmzTarget: ListStageDevicesXAmzTargetEnum;
}
export declare class ListStageDevicesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listStageDevicesResponse?: shared.ListStageDevicesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
