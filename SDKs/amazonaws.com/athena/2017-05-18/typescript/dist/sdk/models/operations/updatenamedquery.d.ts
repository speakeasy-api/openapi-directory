import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateNamedQueryXAmzTargetEnum {
    AmazonAthenaUpdateNamedQuery = "AmazonAthena.UpdateNamedQuery"
}
export declare class UpdateNamedQueryRequest extends SpeakeasyBase {
    updateNamedQueryInput: shared.UpdateNamedQueryInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateNamedQueryXAmzTargetEnum;
}
export declare class UpdateNamedQueryResponse extends SpeakeasyBase {
    contentType: string;
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
    /**
     * Success
     */
    updateNamedQueryOutput?: Record<string, any>;
}
