import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeGlobalTableSettingsXAmzTargetEnum {
    DynamoDB20120810DescribeGlobalTableSettings = "DynamoDB_20120810.DescribeGlobalTableSettings"
}
export declare class DescribeGlobalTableSettingsRequest extends SpeakeasyBase {
    describeGlobalTableSettingsInput: shared.DescribeGlobalTableSettingsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeGlobalTableSettingsXAmzTargetEnum;
}
export declare class DescribeGlobalTableSettingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeGlobalTableSettingsOutput?: shared.DescribeGlobalTableSettingsOutput;
    /**
     * GlobalTableNotFoundException
     */
    globalTableNotFoundException?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
