import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specify <code>ALL_RULES</code> to activate the traffic allocation specified by any ongoing launches or experiments. Specify <code>DEFAULT_VARIATION</code> to serve the default variation to all users instead.
 */
export declare enum UpdateFeatureRequestBodyEvaluationStrategyEnum {
    AllRules = "ALL_RULES",
    DefaultVariation = "DEFAULT_VARIATION"
}
export declare class UpdateFeatureRequestBody extends SpeakeasyBase {
    /**
     * To update variation configurations for this feature, or add new ones, specify this structure. In this array, include any variations that you want to add or update. If the array includes a variation name that already exists for this feature, it is updated. If it includes a new variation name, it is added as a new variation.
     */
    addOrUpdateVariations?: shared.VariationConfig[];
    /**
     * The name of the variation to use as the default variation. The default variation is served to users who are not allocated to any ongoing launches or experiments of this feature.
     */
    defaultVariation?: string;
    /**
     * An optional description of the feature.
     */
    description?: string;
    /**
     * <p>Specified users that should always be served a specific variation of a feature. Each user is specified by a key-value pair . For each key, specify a user by entering their user ID, account ID, or some other identifier. For the value, specify the name of the variation that they are to be served.</p> <p>This parameter is limited to 2500 overrides or a total of 40KB. The 40KB limit includes an overhead of 6 bytes per override.</p>
     */
    entityOverrides?: Record<string, string>;
    /**
     * Specify <code>ALL_RULES</code> to activate the traffic allocation specified by any ongoing launches or experiments. Specify <code>DEFAULT_VARIATION</code> to serve the default variation to all users instead.
     */
    evaluationStrategy?: UpdateFeatureRequestBodyEvaluationStrategyEnum;
    /**
     * <p>Removes a variation from the feature. If the variation you specify doesn't exist, then this makes no change and does not report an error.</p> <p>This operation fails if you try to remove a variation that is part of an ongoing launch or experiment.</p>
     */
    removeVariations?: string[];
}
export declare class UpdateFeatureRequest extends SpeakeasyBase {
    requestBody: UpdateFeatureRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the feature to be updated.
     */
    feature: string;
    /**
     * The name or ARN of the project that contains the feature to be updated.
     */
    project: string;
}
export declare class UpdateFeatureResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * Success
     */
    updateFeatureResponse?: shared.UpdateFeatureResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
