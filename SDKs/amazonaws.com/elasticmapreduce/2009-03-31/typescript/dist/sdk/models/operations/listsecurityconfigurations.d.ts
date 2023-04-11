import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListSecurityConfigurationsXAmzTargetEnum {
    ElasticMapReduceListSecurityConfigurations = "ElasticMapReduce.ListSecurityConfigurations"
}
export declare class ListSecurityConfigurationsRequest extends SpeakeasyBase {
    listSecurityConfigurationsInput: shared.ListSecurityConfigurationsInput;
    /**
     * Pagination token
     */
    marker?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListSecurityConfigurationsXAmzTargetEnum;
}
export declare class ListSecurityConfigurationsResponse extends SpeakeasyBase {
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
    listSecurityConfigurationsOutput?: shared.ListSecurityConfigurationsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
