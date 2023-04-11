import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetClusterSessionCredentialsXAmzTargetEnum {
    ElasticMapReduceGetClusterSessionCredentials = "ElasticMapReduce.GetClusterSessionCredentials"
}
export declare class GetClusterSessionCredentialsRequest extends SpeakeasyBase {
    getClusterSessionCredentialsInput: shared.GetClusterSessionCredentialsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetClusterSessionCredentialsXAmzTargetEnum;
}
export declare class GetClusterSessionCredentialsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getClusterSessionCredentialsOutput?: shared.GetClusterSessionCredentialsOutput;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
