import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDatabaseRequestBody extends SpeakeasyBase {
    /**
     * The ID of the application.
     */
    applicationId?: string;
    /**
     * The ID of the component.
     */
    componentId?: string;
    /**
     * The Amazon Resource Name (ARN) of the database.
     */
    databaseArn?: string;
    /**
     * The ID of the database.
     */
    databaseId?: string;
}
export declare class GetDatabaseRequest extends SpeakeasyBase {
    requestBody: GetDatabaseRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDatabaseResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getDatabaseOutput?: shared.GetDatabaseOutput;
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
