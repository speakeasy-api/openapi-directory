import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The type of share invitations to be returned.
 */
export declare enum ListShareInvitationsShareResourceTypeEnum {
    Workload = "WORKLOAD",
    Lens = "LENS"
}
export declare class ListShareInvitationsRequest extends SpeakeasyBase {
    /**
     * An optional string added to the beginning of each lens name returned in the results.
     */
    lensNamePrefix?: string;
    /**
     * The maximum number of results to return for this request.
     */
    maxResults?: number;
    nextToken?: string;
    /**
     * The type of share invitations to be returned.
     */
    shareResourceType?: ListShareInvitationsShareResourceTypeEnum;
    workloadNamePrefix?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListShareInvitationsResponse extends SpeakeasyBase {
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
     * Success
     */
    listShareInvitationsOutput?: shared.ListShareInvitationsOutput;
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
