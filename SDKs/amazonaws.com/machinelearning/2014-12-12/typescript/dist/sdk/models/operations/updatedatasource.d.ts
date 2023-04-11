import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateDataSourceXAmzTargetEnum {
    AmazonML20141212UpdateDataSource = "AmazonML_20141212.UpdateDataSource"
}
export declare class UpdateDataSourceRequest extends SpeakeasyBase {
    updateDataSourceInput: shared.UpdateDataSourceInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDataSourceXAmzTargetEnum;
}
export declare class UpdateDataSourceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateDataSourceOutput?: shared.UpdateDataSourceOutput;
}
