import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListAliasesXAmzTargetEnum {
    GameLiftListAliases = "GameLift.ListAliases"
}
export declare class ListAliasesRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    limit?: string;
    listAliasesInput: shared.ListAliasesInput;
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
    xAmzTarget: ListAliasesXAmzTargetEnum;
}
export declare class ListAliasesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listAliasesOutput?: shared.ListAliasesOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
