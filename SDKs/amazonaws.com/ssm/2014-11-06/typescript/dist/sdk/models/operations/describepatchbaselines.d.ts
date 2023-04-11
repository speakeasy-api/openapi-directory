import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribePatchBaselinesXAmzTargetEnum {
    AmazonSSMDescribePatchBaselines = "AmazonSSM.DescribePatchBaselines"
}
export declare class DescribePatchBaselinesRequest extends SpeakeasyBase {
    describePatchBaselinesRequest: shared.DescribePatchBaselinesRequest;
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
    xAmzTarget: DescribePatchBaselinesXAmzTargetEnum;
}
export declare class DescribePatchBaselinesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describePatchBaselinesResult?: shared.DescribePatchBaselinesResult;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
