import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListResourcesForTagOptionXAmzTargetEnum {
    Aws242ServiceCatalogServiceListResourcesForTagOption = "AWS242ServiceCatalogService.ListResourcesForTagOption"
}
export declare class ListResourcesForTagOptionRequest extends SpeakeasyBase {
    listResourcesForTagOptionInput: shared.ListResourcesForTagOptionInput;
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
    xAmzTarget: ListResourcesForTagOptionXAmzTargetEnum;
}
export declare class ListResourcesForTagOptionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
    /**
     * Success
     */
    listResourcesForTagOptionOutput?: shared.ListResourcesForTagOptionOutput;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TagOptionNotMigratedException
     */
    tagOptionNotMigratedException?: any;
}
