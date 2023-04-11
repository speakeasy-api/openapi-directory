import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutBlockPublicAccessConfigurationXAmzTargetEnum {
    ElasticMapReducePutBlockPublicAccessConfiguration = "ElasticMapReduce.PutBlockPublicAccessConfiguration"
}
export declare class PutBlockPublicAccessConfigurationRequest extends SpeakeasyBase {
    putBlockPublicAccessConfigurationInput: shared.PutBlockPublicAccessConfigurationInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutBlockPublicAccessConfigurationXAmzTargetEnum;
}
export declare class PutBlockPublicAccessConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    putBlockPublicAccessConfigurationOutput?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
