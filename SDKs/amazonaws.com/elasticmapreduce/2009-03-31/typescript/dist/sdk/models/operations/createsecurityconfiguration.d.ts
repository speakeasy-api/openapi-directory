import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateSecurityConfigurationXAmzTargetEnum {
    ElasticMapReduceCreateSecurityConfiguration = "ElasticMapReduce.CreateSecurityConfiguration"
}
export declare class CreateSecurityConfigurationRequest extends SpeakeasyBase {
    createSecurityConfigurationInput: shared.CreateSecurityConfigurationInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateSecurityConfigurationXAmzTargetEnum;
}
export declare class CreateSecurityConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createSecurityConfigurationOutput?: shared.CreateSecurityConfigurationOutput;
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
