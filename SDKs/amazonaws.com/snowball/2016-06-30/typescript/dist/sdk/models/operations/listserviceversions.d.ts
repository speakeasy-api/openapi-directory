import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListServiceVersionsXAmzTargetEnum {
    AWSIESnowballJobManagementServiceListServiceVersions = "AWSIESnowballJobManagementService.ListServiceVersions"
}
export declare class ListServiceVersionsRequest extends SpeakeasyBase {
    listServiceVersionsRequest: shared.ListServiceVersionsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListServiceVersionsXAmzTargetEnum;
}
export declare class ListServiceVersionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * InvalidResourceException
     */
    invalidResourceException?: any;
    /**
     * Success
     */
    listServiceVersionsResult?: shared.ListServiceVersionsResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
