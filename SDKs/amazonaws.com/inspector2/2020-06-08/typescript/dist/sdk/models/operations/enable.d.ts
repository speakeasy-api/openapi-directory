import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnableRequestBody extends SpeakeasyBase {
    /**
     * A list of account IDs you want to enable Amazon Inspector scans for.
     */
    accountIds?: string[];
    /**
     * The idempotency token for the request.
     */
    clientToken?: string;
    /**
     * The resource scan types you want to enable.
     */
    resourceTypes: shared.ResourceScanTypeEnum[];
}
export declare class EnableRequest extends SpeakeasyBase {
    requestBody: EnableRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class EnableResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    enableResponse?: shared.EnableResponse;
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
