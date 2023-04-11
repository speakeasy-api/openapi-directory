import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SelectAggregateResourceConfigXAmzTargetEnum {
    StarlingDoveServiceSelectAggregateResourceConfig = "StarlingDoveService.SelectAggregateResourceConfig"
}
export declare class SelectAggregateResourceConfigRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    limit?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    selectAggregateResourceConfigRequest: shared.SelectAggregateResourceConfigRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SelectAggregateResourceConfigXAmzTargetEnum;
}
export declare class SelectAggregateResourceConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidExpressionException
     */
    invalidExpressionException?: any;
    /**
     * InvalidLimitException
     */
    invalidLimitException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * NoSuchConfigurationAggregatorException
     */
    noSuchConfigurationAggregatorException?: any;
    /**
     * Success
     */
    selectAggregateResourceConfigResponse?: shared.SelectAggregateResourceConfigResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
