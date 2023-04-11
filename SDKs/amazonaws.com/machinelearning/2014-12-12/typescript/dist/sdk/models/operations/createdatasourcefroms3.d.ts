import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateDataSourceFromS3XAmzTargetEnum {
    AmazonML20141212CreateDataSourceFromS3 = "AmazonML_20141212.CreateDataSourceFromS3"
}
export declare class CreateDataSourceFromS3Request extends SpeakeasyBase {
    createDataSourceFromS3Input: shared.CreateDataSourceFromS3Input;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDataSourceFromS3XAmzTargetEnum;
}
export declare class CreateDataSourceFromS3Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createDataSourceFromS3Output?: shared.CreateDataSourceFromS3Output;
    /**
     * IdempotentParameterMismatchException
     */
    idempotentParameterMismatchException?: any;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
