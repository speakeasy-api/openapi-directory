import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The state represents the action to take to update the finding Status. Use <code>ARCHIVE</code> to change an Active finding to an Archived finding. Use <code>ACTIVE</code> to change an Archived finding to an Active finding.
 */
export declare enum UpdateFindingsRequestBodyStatusEnum {
    Active = "ACTIVE",
    Archived = "ARCHIVED"
}
export declare class UpdateFindingsRequestBody extends SpeakeasyBase {
    /**
     * The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> that generated the findings to update.
     */
    analyzerArn: string;
    /**
     * A client token.
     */
    clientToken?: string;
    /**
     * The IDs of the findings to update.
     */
    ids?: string[];
    /**
     * The ARN of the resource identified in the finding.
     */
    resourceArn?: string;
    /**
     * The state represents the action to take to update the finding Status. Use <code>ARCHIVE</code> to change an Active finding to an Archived finding. Use <code>ACTIVE</code> to change an Archived finding to an Active finding.
     */
    status: UpdateFindingsRequestBodyStatusEnum;
}
export declare class UpdateFindingsRequest extends SpeakeasyBase {
    requestBody: UpdateFindingsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateFindingsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
