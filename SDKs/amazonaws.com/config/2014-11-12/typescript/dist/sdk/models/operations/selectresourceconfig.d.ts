import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SelectResourceConfigXAmzTargetEnum {
    StarlingDoveServiceSelectResourceConfig = "StarlingDoveService.SelectResourceConfig"
}
export declare class SelectResourceConfigRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    limit?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    selectResourceConfigRequest: shared.SelectResourceConfigRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SelectResourceConfigXAmzTargetEnum;
}
export declare class SelectResourceConfigResponse extends SpeakeasyBase {
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
     * Success
     */
    selectResourceConfigResponse?: shared.SelectResourceConfigResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
