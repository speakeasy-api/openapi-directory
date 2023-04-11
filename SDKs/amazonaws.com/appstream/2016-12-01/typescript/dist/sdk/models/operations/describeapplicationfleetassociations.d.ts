import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeApplicationFleetAssociationsXAmzTargetEnum {
    PhotonAdminProxyServiceDescribeApplicationFleetAssociations = "PhotonAdminProxyService.DescribeApplicationFleetAssociations"
}
export declare class DescribeApplicationFleetAssociationsRequest extends SpeakeasyBase {
    describeApplicationFleetAssociationsRequest: shared.DescribeApplicationFleetAssociationsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeApplicationFleetAssociationsXAmzTargetEnum;
}
export declare class DescribeApplicationFleetAssociationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeApplicationFleetAssociationsResult?: shared.DescribeApplicationFleetAssociationsResult;
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
