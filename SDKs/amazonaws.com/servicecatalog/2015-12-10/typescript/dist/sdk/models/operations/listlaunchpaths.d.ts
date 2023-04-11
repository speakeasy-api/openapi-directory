import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListLaunchPathsXAmzTargetEnum {
    Aws242ServiceCatalogServiceListLaunchPaths = "AWS242ServiceCatalogService.ListLaunchPaths"
}
export declare class ListLaunchPathsRequest extends SpeakeasyBase {
    listLaunchPathsInput: shared.ListLaunchPathsInput;
    /**
     * Pagination limit
     */
    pageSize?: string;
    /**
     * Pagination token
     */
    pageToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListLaunchPathsXAmzTargetEnum;
}
export declare class ListLaunchPathsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
    /**
     * Success
     */
    listLaunchPathsOutput?: shared.ListLaunchPathsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
