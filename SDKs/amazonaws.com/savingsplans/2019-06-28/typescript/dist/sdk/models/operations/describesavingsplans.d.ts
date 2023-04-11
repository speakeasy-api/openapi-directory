import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeSavingsPlansRequestBody extends SpeakeasyBase {
    /**
     * The filters.
     */
    filters?: shared.SavingsPlanFilter[];
    /**
     * The maximum number of results to return with a single call. To retrieve additional results, make another call with the returned token value.
     */
    maxResults?: number;
    /**
     * The token for the next page of results.
     */
    nextToken?: string;
    /**
     * The Amazon Resource Names (ARN) of the Savings Plans.
     */
    savingsPlanArns?: string[];
    /**
     * The IDs of the Savings Plans.
     */
    savingsPlanIds?: string[];
    /**
     * The states.
     */
    states?: shared.SavingsPlanStateEnum[];
}
export declare class DescribeSavingsPlansRequest extends SpeakeasyBase {
    requestBody: DescribeSavingsPlansRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeSavingsPlansResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeSavingsPlansResponse?: shared.DescribeSavingsPlansResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
