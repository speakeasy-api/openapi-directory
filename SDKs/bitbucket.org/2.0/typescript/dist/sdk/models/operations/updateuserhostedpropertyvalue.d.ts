import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateUserHostedPropertyValueRequest extends SpeakeasyBase {
    /**
     * The application property to create or update.
     */
    requestBody: Record<string, any>;
    /**
     * The key of the Connect app.
     */
    appKey: string;
    /**
     * The name of the property.
     */
    propertyName: string;
    /**
     * Either the UUID of the account surrounded by curly-braces, for example `{account UUID}`, OR an Atlassian Account ID.
     */
    selectedUser: string;
}
export declare class UpdateUserHostedPropertyValueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
