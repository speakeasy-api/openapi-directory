import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetAggregateResourceConfigXAmzTargetEnum {
    StarlingDoveServiceGetAggregateResourceConfig = "StarlingDoveService.GetAggregateResourceConfig"
}
export declare class GetAggregateResourceConfigRequest extends SpeakeasyBase {
    getAggregateResourceConfigRequest: shared.GetAggregateResourceConfigRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAggregateResourceConfigXAmzTargetEnum;
}
export declare class GetAggregateResourceConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getAggregateResourceConfigResponse?: shared.GetAggregateResourceConfigResponse;
    /**
     * NoSuchConfigurationAggregatorException
     */
    noSuchConfigurationAggregatorException?: any;
    /**
     * OversizedConfigurationItemException
     */
    oversizedConfigurationItemException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotDiscoveredException
     */
    resourceNotDiscoveredException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
