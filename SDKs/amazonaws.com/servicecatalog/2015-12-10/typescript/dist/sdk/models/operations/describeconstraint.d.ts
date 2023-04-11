import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeConstraintXAmzTargetEnum {
    Aws242ServiceCatalogServiceDescribeConstraint = "AWS242ServiceCatalogService.DescribeConstraint"
}
export declare class DescribeConstraintRequest extends SpeakeasyBase {
    describeConstraintInput: shared.DescribeConstraintInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeConstraintXAmzTargetEnum;
}
export declare class DescribeConstraintResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeConstraintOutput?: shared.DescribeConstraintOutput;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
