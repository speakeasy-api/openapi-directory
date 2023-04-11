import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListRulesPackagesXAmzTargetEnum {
    InspectorServiceListRulesPackages = "InspectorService.ListRulesPackages"
}
export declare class ListRulesPackagesRequest extends SpeakeasyBase {
    listRulesPackagesRequest: shared.ListRulesPackagesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListRulesPackagesXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListRulesPackagesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * Success
     */
    listRulesPackagesResponse?: shared.ListRulesPackagesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
