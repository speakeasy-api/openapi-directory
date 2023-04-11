import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListWebhooksXAmzTargetEnum {
    CodePipeline20150709ListWebhooks = "CodePipeline_20150709.ListWebhooks"
}
export declare class ListWebhooksRequest extends SpeakeasyBase {
    listWebhooksInput: shared.ListWebhooksInput;
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
    xAmzTarget: ListWebhooksXAmzTargetEnum;
}
export declare class ListWebhooksResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * Success
     */
    listWebhooksOutput?: shared.ListWebhooksOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
