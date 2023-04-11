import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * List of signing profiles that can sign a code package.
 */
export declare class UpdateCodeSigningConfigRequestBodyAllowedPublishers extends SpeakeasyBase {
    signingProfileVersionArns?: string[];
}
/**
 * Code signing configuration <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html#config-codesigning-policies">policies</a> specify the validation failure action for signature mismatch or expiry.
 */
export declare class UpdateCodeSigningConfigRequestBodyCodeSigningPolicies extends SpeakeasyBase {
    untrustedArtifactOnDeployment?: shared.CodeSigningPolicyEnum;
}
export declare class UpdateCodeSigningConfigRequestBody extends SpeakeasyBase {
    /**
     * List of signing profiles that can sign a code package.
     */
    allowedPublishers?: UpdateCodeSigningConfigRequestBodyAllowedPublishers;
    /**
     * Code signing configuration <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html#config-codesigning-policies">policies</a> specify the validation failure action for signature mismatch or expiry.
     */
    codeSigningPolicies?: UpdateCodeSigningConfigRequestBodyCodeSigningPolicies;
    /**
     * Descriptive name for this code signing configuration.
     */
    description?: string;
}
export declare class UpdateCodeSigningConfigRequest extends SpeakeasyBase {
    /**
     * The The Amazon Resource Name (ARN) of the code signing configuration.
     */
    codeSigningConfigArn: string;
    requestBody: UpdateCodeSigningConfigRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateCodeSigningConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceException
     */
    serviceException?: any;
    /**
     * Success
     */
    updateCodeSigningConfigResponse?: shared.UpdateCodeSigningConfigResponse;
}
