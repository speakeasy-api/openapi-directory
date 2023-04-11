import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeAssociationExecutionTargetsXAmzTargetEnum {
    AmazonSSMDescribeAssociationExecutionTargets = "AmazonSSM.DescribeAssociationExecutionTargets"
}
export declare class DescribeAssociationExecutionTargetsRequest extends SpeakeasyBase {
    describeAssociationExecutionTargetsRequest: shared.DescribeAssociationExecutionTargetsRequest;
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
    xAmzTarget: DescribeAssociationExecutionTargetsXAmzTargetEnum;
}
export declare class DescribeAssociationExecutionTargetsResponse extends SpeakeasyBase {
    /**
     * AssociationDoesNotExist
     */
    associationDoesNotExist?: any;
    /**
     * AssociationExecutionDoesNotExist
     */
    associationExecutionDoesNotExist?: any;
    contentType: string;
    /**
     * Success
     */
    describeAssociationExecutionTargetsResult?: shared.DescribeAssociationExecutionTargetsResult;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidNextToken
     */
    invalidNextToken?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
