import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListHypervisorsXAmzTargetEnum {
    BackupOnPremisesV20210101ListHypervisors = "BackupOnPremises_v20210101.ListHypervisors"
}
export declare class ListHypervisorsRequest extends SpeakeasyBase {
    listHypervisorsInput: shared.ListHypervisorsInput;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListHypervisorsXAmzTargetEnum;
}
export declare class ListHypervisorsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listHypervisorsOutput?: shared.ListHypervisorsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
