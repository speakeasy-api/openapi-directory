import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeRecordXAmzTargetEnum {
    Aws242ServiceCatalogServiceDescribeRecord = "AWS242ServiceCatalogService.DescribeRecord"
}
export declare class DescribeRecordRequest extends SpeakeasyBase {
    describeRecordInput: shared.DescribeRecordInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeRecordXAmzTargetEnum;
}
export declare class DescribeRecordResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeRecordOutput?: shared.DescribeRecordOutput;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
