import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListDeviceFleetsXAmzTargetEnum {
    SageMakerListDeviceFleets = "SageMaker.ListDeviceFleets"
}
export declare class ListDeviceFleetsRequest extends SpeakeasyBase {
    listDeviceFleetsRequest: shared.ListDeviceFleetsRequest;
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
    xAmzTarget: ListDeviceFleetsXAmzTargetEnum;
}
export declare class ListDeviceFleetsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listDeviceFleetsResponse?: shared.ListDeviceFleetsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
