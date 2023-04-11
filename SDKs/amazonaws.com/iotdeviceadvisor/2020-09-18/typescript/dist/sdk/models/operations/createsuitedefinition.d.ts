import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Gets the suite definition configuration.
 */
export declare class CreateSuiteDefinitionRequestBodySuiteDefinitionConfiguration extends SpeakeasyBase {
    devicePermissionRoleArn?: string;
    devices?: shared.DeviceUnderTest[];
    intendedForQualification?: boolean;
    isLongDurationTest?: boolean;
    protocol?: shared.ProtocolEnum;
    rootGroup?: string;
    suiteDefinitionName?: string;
}
export declare class CreateSuiteDefinitionRequestBody extends SpeakeasyBase {
    /**
     * Gets the suite definition configuration.
     */
    suiteDefinitionConfiguration: CreateSuiteDefinitionRequestBodySuiteDefinitionConfiguration;
    /**
     * The tags to be attached to the suite definition.
     */
    tags?: Record<string, string>;
}
export declare class CreateSuiteDefinitionRequest extends SpeakeasyBase {
    requestBody: CreateSuiteDefinitionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateSuiteDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createSuiteDefinitionResponse?: shared.CreateSuiteDefinitionResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
