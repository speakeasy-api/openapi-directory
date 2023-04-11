import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeEffectiveInstanceAssociationsXAmzTargetEnum {
    AmazonSSMDescribeEffectiveInstanceAssociations = "AmazonSSM.DescribeEffectiveInstanceAssociations"
}
export declare class DescribeEffectiveInstanceAssociationsRequest extends SpeakeasyBase {
    describeEffectiveInstanceAssociationsRequest: shared.DescribeEffectiveInstanceAssociationsRequest;
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
    xAmzTarget: DescribeEffectiveInstanceAssociationsXAmzTargetEnum;
}
export declare class DescribeEffectiveInstanceAssociationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeEffectiveInstanceAssociationsResult?: shared.DescribeEffectiveInstanceAssociationsResult;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidInstanceId
     */
    invalidInstanceId?: any;
    /**
     * InvalidNextToken
     */
    invalidNextToken?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
