import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeAssociationExecutionsXAmzTargetEnum {
    AmazonSSMDescribeAssociationExecutions = "AmazonSSM.DescribeAssociationExecutions"
}
export declare class DescribeAssociationExecutionsRequest extends SpeakeasyBase {
    describeAssociationExecutionsRequest: shared.DescribeAssociationExecutionsRequest;
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
    xAmzTarget: DescribeAssociationExecutionsXAmzTargetEnum;
}
export declare class DescribeAssociationExecutionsResponse extends SpeakeasyBase {
    /**
     * AssociationDoesNotExist
     */
    associationDoesNotExist?: any;
    contentType: string;
    /**
     * Success
     */
    describeAssociationExecutionsResult?: shared.DescribeAssociationExecutionsResult;
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
