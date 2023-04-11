import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateDataSourceFromRDSXAmzTargetEnum {
    AmazonML20141212CreateDataSourceFromRDS = "AmazonML_20141212.CreateDataSourceFromRDS"
}
export declare class CreateDataSourceFromRDSRequest extends SpeakeasyBase {
    createDataSourceFromRDSInput: shared.CreateDataSourceFromRDSInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDataSourceFromRDSXAmzTargetEnum;
}
export declare class CreateDataSourceFromRDSResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createDataSourceFromRDSOutput?: shared.CreateDataSourceFromRDSOutput;
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
