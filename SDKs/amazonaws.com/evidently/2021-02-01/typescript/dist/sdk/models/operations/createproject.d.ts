import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * <p>Use this parameter to configure client-side evaluation for your project. Client-side evaluation allows your application to assign variations to user sessions locally instead of by calling the <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_EvaluateFeature.html">EvaluateFeature</a> operation to assign the variations. This mitigates the latency and availability risks that come with an API call.</p> <p> <code>ProjectAppConfigResource</code> is a structure that defines the configuration of how your application integrates with AppConfig to run client-side evaluation.</p>
 */
export declare class CreateProjectRequestBodyAppConfigResource extends SpeakeasyBase {
    applicationId?: string;
    environmentId?: string;
}
/**
 * A structure that contains information about where Evidently is to store evaluation events for longer term storage.
 */
export declare class CreateProjectRequestBodyDataDelivery extends SpeakeasyBase {
    cloudWatchLogs?: shared.CloudWatchLogsDestinationConfig;
    s3Destination?: shared.S3DestinationConfig;
}
export declare class CreateProjectRequestBody extends SpeakeasyBase {
    /**
     * <p>Use this parameter to configure client-side evaluation for your project. Client-side evaluation allows your application to assign variations to user sessions locally instead of by calling the <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_EvaluateFeature.html">EvaluateFeature</a> operation to assign the variations. This mitigates the latency and availability risks that come with an API call.</p> <p> <code>ProjectAppConfigResource</code> is a structure that defines the configuration of how your application integrates with AppConfig to run client-side evaluation.</p>
     */
    appConfigResource?: CreateProjectRequestBodyAppConfigResource;
    /**
     * A structure that contains information about where Evidently is to store evaluation events for longer term storage.
     */
    dataDelivery?: CreateProjectRequestBodyDataDelivery;
    /**
     * An optional description of the project.
     */
    description?: string;
    /**
     * The name for the project.
     */
    name: string;
    /**
     * <p>Assigns one or more tags (key-value pairs) to the project.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can associate as many as 50 tags with a project.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
     */
    tags?: Record<string, string>;
}
export declare class CreateProjectRequest extends SpeakeasyBase {
    requestBody: CreateProjectRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateProjectResponse extends SpeakeasyBase {
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
    createProjectResponse?: shared.CreateProjectResponse;
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
