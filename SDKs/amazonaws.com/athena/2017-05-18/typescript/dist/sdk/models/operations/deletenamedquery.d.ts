import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteNamedQueryXAmzTargetEnum {
    AmazonAthenaDeleteNamedQuery = "AmazonAthena.DeleteNamedQuery"
}
export declare class DeleteNamedQueryRequest extends SpeakeasyBase {
    deleteNamedQueryInput: shared.DeleteNamedQueryInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteNamedQueryXAmzTargetEnum;
}
export declare class DeleteNamedQueryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteNamedQueryOutput?: Record<string, any>;
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
