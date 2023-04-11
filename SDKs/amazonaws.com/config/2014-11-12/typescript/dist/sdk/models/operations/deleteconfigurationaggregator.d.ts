import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteConfigurationAggregatorXAmzTargetEnum {
    StarlingDoveServiceDeleteConfigurationAggregator = "StarlingDoveService.DeleteConfigurationAggregator"
}
export declare class DeleteConfigurationAggregatorRequest extends SpeakeasyBase {
    deleteConfigurationAggregatorRequest: shared.DeleteConfigurationAggregatorRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteConfigurationAggregatorXAmzTargetEnum;
}
export declare class DeleteConfigurationAggregatorResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * NoSuchConfigurationAggregatorException
     */
    noSuchConfigurationAggregatorException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
