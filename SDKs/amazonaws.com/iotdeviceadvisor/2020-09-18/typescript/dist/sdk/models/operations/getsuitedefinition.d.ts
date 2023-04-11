import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSuiteDefinitionRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Suite definition ID of the test suite to get.
     */
    suiteDefinitionId: string;
    /**
     * Suite definition version of the test suite to get.
     */
    suiteDefinitionVersion?: string;
}
export declare class GetSuiteDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getSuiteDefinitionResponse?: shared.GetSuiteDefinitionResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
