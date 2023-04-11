import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListApprovalRuleTemplatesXAmzTargetEnum {
    CodeCommit20150413ListApprovalRuleTemplates = "CodeCommit_20150413.ListApprovalRuleTemplates"
}
export declare class ListApprovalRuleTemplatesRequest extends SpeakeasyBase {
    listApprovalRuleTemplatesInput: shared.ListApprovalRuleTemplatesInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListApprovalRuleTemplatesXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListApprovalRuleTemplatesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidContinuationTokenException
     */
    invalidContinuationTokenException?: any;
    /**
     * InvalidMaxResultsException
     */
    invalidMaxResultsException?: any;
    /**
     * Success
     */
    listApprovalRuleTemplatesOutput?: shared.ListApprovalRuleTemplatesOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
