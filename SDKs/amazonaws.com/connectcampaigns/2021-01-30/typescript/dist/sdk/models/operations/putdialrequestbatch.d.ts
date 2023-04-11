import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutDialRequestBatchRequestBody extends SpeakeasyBase {
    /**
     * A list of dial requests.
     */
    dialRequests: shared.DialRequest[];
}
export declare class PutDialRequestBatchRequest extends SpeakeasyBase {
    requestBody: PutDialRequestBatchRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    id: string;
}
export declare class PutDialRequestBatchResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidCampaignStateException
     */
    invalidCampaignStateException?: any;
    /**
     * Success
     */
    putDialRequestBatchResponse?: shared.PutDialRequestBatchResponse;
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
     * ValidationException
     */
    validationException?: any;
}
