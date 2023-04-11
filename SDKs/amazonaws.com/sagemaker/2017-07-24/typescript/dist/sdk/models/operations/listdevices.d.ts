import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListDevicesXAmzTargetEnum {
    SageMakerListDevices = "SageMaker.ListDevices"
}
export declare class ListDevicesRequest extends SpeakeasyBase {
    listDevicesRequest: shared.ListDevicesRequest;
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
    xAmzTarget: ListDevicesXAmzTargetEnum;
}
export declare class ListDevicesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listDevicesResponse?: shared.ListDevicesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
