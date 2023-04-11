import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETListTypeRegistrationsActionEnum {
    ListTypeRegistrations = "ListTypeRegistrations"
}
/**
 * <p>The current status of the extension registration request.</p> <p>The default is <code>IN_PROGRESS</code>.</p>
 */
export declare enum GETListTypeRegistrationsRegistrationStatusFilterEnum {
    Complete = "COMPLETE",
    InProgress = "IN_PROGRESS",
    Failed = "FAILED"
}
/**
 * <p>The kind of extension.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
 */
export declare enum GETListTypeRegistrationsTypeEnum {
    Resource = "RESOURCE",
    Module = "MODULE",
    Hook = "HOOK"
}
export declare enum GETListTypeRegistrationsVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class GETListTypeRegistrationsRequest extends SpeakeasyBase {
    action: GETListTypeRegistrationsActionEnum;
    /**
     * The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.
     */
    maxResults?: number;
    /**
     * If the previous paginated request didn't return all the remaining results, the response object's <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call this action again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>.
     */
    nextToken?: string;
    /**
     * <p>The current status of the extension registration request.</p> <p>The default is <code>IN_PROGRESS</code>.</p>
     */
    registrationStatusFilter?: GETListTypeRegistrationsRegistrationStatusFilterEnum;
    /**
     * <p>The kind of extension.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
     */
    type?: GETListTypeRegistrationsTypeEnum;
    /**
     * <p>The Amazon Resource Name (ARN) of the extension.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
     */
    typeArn?: string;
    /**
     * <p>The name of the extension.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
     */
    typeName?: string;
    version: GETListTypeRegistrationsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETListTypeRegistrationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
