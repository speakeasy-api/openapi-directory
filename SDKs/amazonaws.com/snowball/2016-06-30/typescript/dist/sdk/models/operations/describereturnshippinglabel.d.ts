import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeReturnShippingLabelXAmzTargetEnum {
    AWSIESnowballJobManagementServiceDescribeReturnShippingLabel = "AWSIESnowballJobManagementService.DescribeReturnShippingLabel"
}
export declare class DescribeReturnShippingLabelRequest extends SpeakeasyBase {
    describeReturnShippingLabelRequest: shared.DescribeReturnShippingLabelRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeReturnShippingLabelXAmzTargetEnum;
}
export declare class DescribeReturnShippingLabelResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    describeReturnShippingLabelResult?: shared.DescribeReturnShippingLabelResult;
    /**
     * InvalidJobStateException
     */
    invalidJobStateException?: any;
    /**
     * InvalidResourceException
     */
    invalidResourceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
