import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeTagOptionXAmzTargetEnum {
    Aws242ServiceCatalogServiceDescribeTagOption = "AWS242ServiceCatalogService.DescribeTagOption"
}
export declare class DescribeTagOptionRequest extends SpeakeasyBase {
    describeTagOptionInput: shared.DescribeTagOptionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTagOptionXAmzTargetEnum;
}
export declare class DescribeTagOptionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeTagOptionOutput?: shared.DescribeTagOptionOutput;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TagOptionNotMigratedException
     */
    tagOptionNotMigratedException?: any;
}
