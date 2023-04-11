import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListLogPatternSetsXAmzTargetEnum {
    Ec2WindowsBarleyServiceListLogPatternSets = "EC2WindowsBarleyService.ListLogPatternSets"
}
export declare class ListLogPatternSetsRequest extends SpeakeasyBase {
    listLogPatternSetsRequest: shared.ListLogPatternSetsRequest;
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
    xAmzTarget: ListLogPatternSetsXAmzTargetEnum;
}
export declare class ListLogPatternSetsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listLogPatternSetsResponse?: shared.ListLogPatternSetsResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
