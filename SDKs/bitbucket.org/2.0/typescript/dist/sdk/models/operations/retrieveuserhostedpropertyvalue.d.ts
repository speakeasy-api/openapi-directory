import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RetrieveUserHostedPropertyValueRequest extends SpeakeasyBase {
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
export declare class RetrieveUserHostedPropertyValueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The value of the property.
     */
    applicationProperty?: Record<string, any>;
}
