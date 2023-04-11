import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteSecurityConfigurationXAmzTargetEnum {
    ElasticMapReduceDeleteSecurityConfiguration = "ElasticMapReduce.DeleteSecurityConfiguration"
}
export declare class DeleteSecurityConfigurationRequest extends SpeakeasyBase {
    deleteSecurityConfigurationInput: shared.DeleteSecurityConfigurationInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteSecurityConfigurationXAmzTargetEnum;
}
export declare class DeleteSecurityConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteSecurityConfigurationOutput?: Record<string, any>;
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
