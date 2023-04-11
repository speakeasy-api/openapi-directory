import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribePatchPropertiesXAmzTargetEnum {
    AmazonSSMDescribePatchProperties = "AmazonSSM.DescribePatchProperties"
}
export declare class DescribePatchPropertiesRequest extends SpeakeasyBase {
    describePatchPropertiesRequest: shared.DescribePatchPropertiesRequest;
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
    xAmzTarget: DescribePatchPropertiesXAmzTargetEnum;
}
export declare class DescribePatchPropertiesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describePatchPropertiesResult?: shared.DescribePatchPropertiesResult;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
