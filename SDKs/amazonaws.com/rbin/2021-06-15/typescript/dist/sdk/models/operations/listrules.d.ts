import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The lock state of the retention rules to list. Only retention rules with the specified lock state are returned.
 */
export declare enum ListRulesRequestBodyLockStateEnum {
    Locked = "locked",
    PendingUnlock = "pending_unlock",
    Unlocked = "unlocked"
}
/**
 * The resource type retained by the retention rule. Only retention rules that retain the specified resource type are listed. Currently, only Amazon EBS snapshots and EBS-backed AMIs are supported. To list retention rules that retain snapshots, specify <code>EBS_SNAPSHOT</code>. To list retention rules that retain EBS-backed AMIs, specify <code>EC2_IMAGE</code>.
 */
export declare enum ListRulesRequestBodyResourceTypeEnum {
    EbsSnapshot = "EBS_SNAPSHOT",
    Ec2Image = "EC2_IMAGE"
}
export declare class ListRulesRequestBody extends SpeakeasyBase {
    /**
     * The lock state of the retention rules to list. Only retention rules with the specified lock state are returned.
     */
    lockState?: ListRulesRequestBodyLockStateEnum;
    /**
     * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>NextToken</code> value.
     */
    maxResults?: number;
    /**
     * The token for the next page of results.
     */
    nextToken?: string;
    /**
     * Information about the resource tags used to identify resources that are retained by the retention rule.
     */
    resourceTags?: shared.ResourceTag[];
    /**
     * The resource type retained by the retention rule. Only retention rules that retain the specified resource type are listed. Currently, only Amazon EBS snapshots and EBS-backed AMIs are supported. To list retention rules that retain snapshots, specify <code>EBS_SNAPSHOT</code>. To list retention rules that retain EBS-backed AMIs, specify <code>EC2_IMAGE</code>.
     */
    resourceType: ListRulesRequestBodyResourceTypeEnum;
}
export declare class ListRulesRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: ListRulesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListRulesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listRulesResponse?: shared.ListRulesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
