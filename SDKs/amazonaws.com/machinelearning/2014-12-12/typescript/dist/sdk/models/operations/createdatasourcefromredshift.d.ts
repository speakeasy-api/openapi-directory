import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateDataSourceFromRedshiftXAmzTargetEnum {
    AmazonML20141212CreateDataSourceFromRedshift = "AmazonML_20141212.CreateDataSourceFromRedshift"
}
export declare class CreateDataSourceFromRedshiftRequest extends SpeakeasyBase {
    createDataSourceFromRedshiftInput: shared.CreateDataSourceFromRedshiftInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDataSourceFromRedshiftXAmzTargetEnum;
}
export declare class CreateDataSourceFromRedshiftResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createDataSourceFromRedshiftOutput?: shared.CreateDataSourceFromRedshiftOutput;
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
