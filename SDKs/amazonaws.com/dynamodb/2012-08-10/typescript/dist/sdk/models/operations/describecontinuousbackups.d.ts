import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeContinuousBackupsXAmzTargetEnum {
    DynamoDB20120810DescribeContinuousBackups = "DynamoDB_20120810.DescribeContinuousBackups"
}
export declare class DescribeContinuousBackupsRequest extends SpeakeasyBase {
    describeContinuousBackupsInput: shared.DescribeContinuousBackupsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeContinuousBackupsXAmzTargetEnum;
}
export declare class DescribeContinuousBackupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeContinuousBackupsOutput?: shared.DescribeContinuousBackupsOutput;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TableNotFoundException
     */
    tableNotFoundException?: any;
}
