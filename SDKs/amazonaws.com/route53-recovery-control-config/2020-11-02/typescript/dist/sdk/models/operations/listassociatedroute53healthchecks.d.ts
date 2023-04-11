import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListAssociatedRoute53HealthChecksRequest extends SpeakeasyBase {
    /**
     * The number of objects that you want to return with this call.
     */
    maxResults?: number;
    /**
     * The token that identifies which batch of results you want to see.
     */
    nextToken?: string;
    /**
     * The Amazon Resource Name (ARN) of the routing control.
     */
    routingControlArn: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListAssociatedRoute53HealthChecksResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listAssociatedRoute53HealthChecksResponse?: shared.ListAssociatedRoute53HealthChecksResponse;
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
