import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateNamedQueryXAmzTargetEnum {
    AmazonAthenaCreateNamedQuery = "AmazonAthena.CreateNamedQuery"
}
export declare class CreateNamedQueryRequest extends SpeakeasyBase {
    createNamedQueryInput: shared.CreateNamedQueryInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateNamedQueryXAmzTargetEnum;
}
export declare class CreateNamedQueryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createNamedQueryOutput?: shared.CreateNamedQueryOutput;
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
