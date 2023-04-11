import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListAssetsRequest extends SpeakeasyBase {
    /**
     * Filters the results by the host ID of a Dedicated Host.
     */
    hostIdFilter?: string[];
    maxResults?: number;
    nextToken?: string;
    /**
     *  The ID or the Amazon Resource Name (ARN) of the Outpost.
     */
    outpostId: string;
    /**
     * Filters the results by state.
     */
    statusFilter?: shared.AssetStateEnum[];
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListAssetsResponse extends SpeakeasyBase {
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
    listAssetsOutput?: shared.ListAssetsOutput;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
