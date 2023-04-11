import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeAssociationXAmzTargetEnum {
    AmazonSSMDescribeAssociation = "AmazonSSM.DescribeAssociation"
}
export declare class DescribeAssociationRequest extends SpeakeasyBase {
    describeAssociationRequest: shared.DescribeAssociationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAssociationXAmzTargetEnum;
}
export declare class DescribeAssociationResponse extends SpeakeasyBase {
    /**
     * AssociationDoesNotExist
     */
    associationDoesNotExist?: any;
    contentType: string;
    /**
     * Success
     */
    describeAssociationResult?: shared.DescribeAssociationResult;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidAssociationVersion
     */
    invalidAssociationVersion?: any;
    /**
     * InvalidDocument
     */
    invalidDocument?: any;
    /**
     * InvalidInstanceId
     */
    invalidInstanceId?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
