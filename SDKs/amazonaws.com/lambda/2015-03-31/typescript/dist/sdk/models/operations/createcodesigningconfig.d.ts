import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * List of signing profiles that can sign a code package.
 */
export declare class CreateCodeSigningConfigRequestBodyAllowedPublishers extends SpeakeasyBase {
    signingProfileVersionArns?: string[];
}
/**
 * Code signing configuration <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html#config-codesigning-policies">policies</a> specify the validation failure action for signature mismatch or expiry.
 */
export declare class CreateCodeSigningConfigRequestBodyCodeSigningPolicies extends SpeakeasyBase {
    untrustedArtifactOnDeployment?: shared.CodeSigningPolicyEnum;
}
export declare class CreateCodeSigningConfigRequestBody extends SpeakeasyBase {
    /**
     * List of signing profiles that can sign a code package.
     */
    allowedPublishers: CreateCodeSigningConfigRequestBodyAllowedPublishers;
    /**
     * Code signing configuration <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html#config-codesigning-policies">policies</a> specify the validation failure action for signature mismatch or expiry.
     */
    codeSigningPolicies?: CreateCodeSigningConfigRequestBodyCodeSigningPolicies;
    /**
     * Descriptive name for this code signing configuration.
     */
    description?: string;
}
export declare class CreateCodeSigningConfigRequest extends SpeakeasyBase {
    requestBody: CreateCodeSigningConfigRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateCodeSigningConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createCodeSigningConfigResponse?: shared.CreateCodeSigningConfigResponse;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
