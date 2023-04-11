import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetDataSourceXAmzTargetEnum {
    AmazonML20141212GetDataSource = "AmazonML_20141212.GetDataSource"
}
export declare class GetDataSourceRequest extends SpeakeasyBase {
    getDataSourceInput: shared.GetDataSourceInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDataSourceXAmzTargetEnum;
}
export declare class GetDataSourceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getDataSourceOutput?: shared.GetDataSourceOutput;
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
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
