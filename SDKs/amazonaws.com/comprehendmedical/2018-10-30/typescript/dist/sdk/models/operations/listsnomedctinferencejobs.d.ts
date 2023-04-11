import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListSNOMEDCTInferenceJobsXAmzTargetEnum {
    ComprehendMedical20181030ListSNOMEDCTInferenceJobs = "ComprehendMedical_20181030.ListSNOMEDCTInferenceJobs"
}
export declare class ListSNOMEDCTInferenceJobsRequest extends SpeakeasyBase {
    listSNOMEDCTInferenceJobsRequest: shared.ListSNOMEDCTInferenceJobsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListSNOMEDCTInferenceJobsXAmzTargetEnum;
}
export declare class ListSNOMEDCTInferenceJobsResponse extends SpeakeasyBase {
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
    listSNOMEDCTInferenceJobsResponse?: shared.ListSNOMEDCTInferenceJobsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
