import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Gets the suite definition configuration.
 */
export declare class UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration extends SpeakeasyBase {
    devicePermissionRoleArn?: string;
    devices?: shared.DeviceUnderTest[];
    intendedForQualification?: boolean;
    isLongDurationTest?: boolean;
    protocol?: shared.ProtocolEnum;
    rootGroup?: string;
    suiteDefinitionName?: string;
}
export declare class UpdateSuiteDefinitionRequestBody extends SpeakeasyBase {
    /**
     * Gets the suite definition configuration.
     */
    suiteDefinitionConfiguration: UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration;
}
export declare class UpdateSuiteDefinitionRequest extends SpeakeasyBase {
    requestBody: UpdateSuiteDefinitionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Suite definition ID of the test suite to be updated.
     */
    suiteDefinitionId: string;
}
export declare class UpdateSuiteDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateSuiteDefinitionResponse?: shared.UpdateSuiteDefinitionResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
