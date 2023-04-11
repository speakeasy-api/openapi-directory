import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies the criteria for an allow list. The criteria must specify a regular expression (regex) or an S3 object (s3WordsList). It can't specify both.
 */
export declare class UpdateAllowListRequestBodyCriteria extends SpeakeasyBase {
    regex?: string;
    s3WordsList?: shared.S3WordsList;
}
export declare class UpdateAllowListRequestBody extends SpeakeasyBase {
    /**
     * Specifies the criteria for an allow list. The criteria must specify a regular expression (regex) or an S3 object (s3WordsList). It can't specify both.
     */
    criteria: UpdateAllowListRequestBodyCriteria;
    /**
     * A custom description of the allow list. The description can contain as many as 512 characters.
     */
    description?: string;
    /**
     * A custom name for the allow list. The name can contain as many as 128 characters.
     */
    name: string;
}
export declare class UpdateAllowListRequest extends SpeakeasyBase {
    requestBody: UpdateAllowListRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique identifier for the Amazon Macie resource that the request applies to.
     */
    id: string;
}
export declare class UpdateAllowListResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateAllowListResponse?: shared.UpdateAllowListResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
