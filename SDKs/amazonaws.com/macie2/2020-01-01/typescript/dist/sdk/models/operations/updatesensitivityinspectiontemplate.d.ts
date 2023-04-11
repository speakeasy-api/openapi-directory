import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Specifies managed data identifiers to exclude (not use) when performing automated sensitive data discovery for an Amazon Macie account. For information about the managed data identifiers that Amazon Macie currently provides, see <a href="https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html">Using managed data identifiers</a> in the <i>Amazon Macie User Guide</i>.
 */
export declare class UpdateSensitivityInspectionTemplateRequestBodyExcludes extends SpeakeasyBase {
    managedDataIdentifierIds?: string[];
}
/**
 * Specifies the allow lists, custom data identifiers, and managed data identifiers to include (use) when performing automated sensitive data discovery for an Amazon Macie account. The configuration must specify at least one custom data identifier or managed data identifier. For information about the managed data identifiers that Amazon Macie currently provides, see <a href="https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html">Using managed data identifiers</a> in the <i>Amazon Macie User Guide</i>.
 */
export declare class UpdateSensitivityInspectionTemplateRequestBodyIncludes extends SpeakeasyBase {
    allowListIds?: string[];
    customDataIdentifierIds?: string[];
    managedDataIdentifierIds?: string[];
}
export declare class UpdateSensitivityInspectionTemplateRequestBody extends SpeakeasyBase {
    /**
     * A custom description of the template. The description can contain as many as 200 characters.
     */
    description?: string;
    /**
     * Specifies managed data identifiers to exclude (not use) when performing automated sensitive data discovery for an Amazon Macie account. For information about the managed data identifiers that Amazon Macie currently provides, see <a href="https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html">Using managed data identifiers</a> in the <i>Amazon Macie User Guide</i>.
     */
    excludes?: UpdateSensitivityInspectionTemplateRequestBodyExcludes;
    /**
     * Specifies the allow lists, custom data identifiers, and managed data identifiers to include (use) when performing automated sensitive data discovery for an Amazon Macie account. The configuration must specify at least one custom data identifier or managed data identifier. For information about the managed data identifiers that Amazon Macie currently provides, see <a href="https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html">Using managed data identifiers</a> in the <i>Amazon Macie User Guide</i>.
     */
    includes?: UpdateSensitivityInspectionTemplateRequestBodyIncludes;
}
export declare class UpdateSensitivityInspectionTemplateRequest extends SpeakeasyBase {
    requestBody: UpdateSensitivityInspectionTemplateRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique identifier for the Amazon Macie resource that the request applies to.
     */
    id: string;
}
export declare class UpdateSensitivityInspectionTemplateResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateSensitivityInspectionTemplateResponse?: Record<string, any>;
    /**
     * ValidationException
     */
    validationException?: any;
}
