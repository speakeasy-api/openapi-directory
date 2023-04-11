import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeUserStackAssociationsXAmzTargetEnum {
    PhotonAdminProxyServiceDescribeUserStackAssociations = "PhotonAdminProxyService.DescribeUserStackAssociations"
}
export declare class DescribeUserStackAssociationsRequest extends SpeakeasyBase {
    describeUserStackAssociationsRequest: shared.DescribeUserStackAssociationsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeUserStackAssociationsXAmzTargetEnum;
}
export declare class DescribeUserStackAssociationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeUserStackAssociationsResult?: shared.DescribeUserStackAssociationsResult;
    /**
     * InvalidParameterCombinationException
     */
    invalidParameterCombinationException?: any;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
