import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetNamedQueryXAmzTargetEnum {
    AmazonAthenaGetNamedQuery = "AmazonAthena.GetNamedQuery"
}
export declare class GetNamedQueryRequest extends SpeakeasyBase {
    getNamedQueryInput: shared.GetNamedQueryInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetNamedQueryXAmzTargetEnum;
}
export declare class GetNamedQueryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getNamedQueryOutput?: shared.GetNamedQueryOutput;
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
