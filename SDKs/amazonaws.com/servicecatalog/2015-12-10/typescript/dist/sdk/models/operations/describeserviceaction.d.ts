import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeServiceActionXAmzTargetEnum {
    Aws242ServiceCatalogServiceDescribeServiceAction = "AWS242ServiceCatalogService.DescribeServiceAction"
}
export declare class DescribeServiceActionRequest extends SpeakeasyBase {
    describeServiceActionInput: shared.DescribeServiceActionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeServiceActionXAmzTargetEnum;
}
export declare class DescribeServiceActionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeServiceActionOutput?: shared.DescribeServiceActionOutput;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
