import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specify <code>ALL_RULES</code> to activate the traffic allocation specified by any ongoing launches or experiments. Specify <code>DEFAULT_VARIATION</code> to serve the default variation to all users instead.
 */
export declare enum CreateFeatureRequestBodyEvaluationStrategyEnum {
    AllRules = "ALL_RULES",
    DefaultVariation = "DEFAULT_VARIATION"
}
export declare class CreateFeatureRequestBody extends SpeakeasyBase {
    /**
     * <p>The name of the variation to use as the default variation. The default variation is served to users who are not allocated to any ongoing launches or experiments of this feature.</p> <p>This variation must also be listed in the <code>variations</code> structure.</p> <p>If you omit <code>defaultVariation</code>, the first variation listed in the <code>variations</code> structure is used as the default variation.</p>
     */
    defaultVariation?: string;
    /**
     * An optional description of the feature.
     */
    description?: string;
    /**
     * <p>Specify users that should always be served a specific variation of a feature. Each user is specified by a key-value pair . For each key, specify a user by entering their user ID, account ID, or some other identifier. For the value, specify the name of the variation that they are to be served.</p> <p>This parameter is limited to 2500 overrides or a total of 40KB. The 40KB limit includes an overhead of 6 bytes per override.</p>
     */
    entityOverrides?: Record<string, string>;
    /**
     * Specify <code>ALL_RULES</code> to activate the traffic allocation specified by any ongoing launches or experiments. Specify <code>DEFAULT_VARIATION</code> to serve the default variation to all users instead.
     */
    evaluationStrategy?: CreateFeatureRequestBodyEvaluationStrategyEnum;
    /**
     * The name for the new feature.
     */
    name: string;
    /**
     * <p>Assigns one or more tags (key-value pairs) to the feature.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can associate as many as 50 tags with a feature.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
     */
    tags?: Record<string, string>;
    /**
     * An array of structures that contain the configuration of the feature's different variations.
     */
    variations: shared.VariationConfig[];
}
export declare class CreateFeatureRequest extends SpeakeasyBase {
    requestBody: CreateFeatureRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name or ARN of the project that is to contain the new feature.
     */
    project: string;
}
export declare class CreateFeatureResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createFeatureResponse?: shared.CreateFeatureResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
