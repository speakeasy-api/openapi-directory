import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListApplicationDPUSizesXAmzTargetEnum {
    AmazonAthenaListApplicationDPUSizes = "AmazonAthena.ListApplicationDPUSizes"
}
export declare class ListApplicationDPUSizesRequest extends SpeakeasyBase {
    listApplicationDPUSizesInput: shared.ListApplicationDPUSizesInput;
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
    xAmzTarget: ListApplicationDPUSizesXAmzTargetEnum;
}
export declare class ListApplicationDPUSizesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listApplicationDPUSizesOutput?: shared.ListApplicationDPUSizesOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
