import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetBlockPublicAccessConfigurationXAmzTargetEnum {
    ElasticMapReduceGetBlockPublicAccessConfiguration = "ElasticMapReduce.GetBlockPublicAccessConfiguration"
}
export declare class GetBlockPublicAccessConfigurationRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetBlockPublicAccessConfigurationXAmzTargetEnum;
}
export declare class GetBlockPublicAccessConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getBlockPublicAccessConfigurationOutput?: shared.GetBlockPublicAccessConfigurationOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
