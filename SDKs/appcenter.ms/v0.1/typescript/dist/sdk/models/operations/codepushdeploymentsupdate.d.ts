import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CodePushDeploymentsUpdateSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * Deployment modification. All fields are optional and only provided fields will get updated.
 */
export declare class CodePushDeploymentsUpdateRequestBody extends SpeakeasyBase {
    name: string;
}
export declare class CodePushDeploymentsUpdateRequest extends SpeakeasyBase {
    /**
     * Deployment modification. All fields are optional and only provided fields will get updated.
     */
    requestBody: CodePushDeploymentsUpdateRequestBody;
    /**
     * The name of the application
     */
    appName: string;
    /**
     * deployment name
     */
    deploymentName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
/**
 * Error
 */
export declare class CodePushDeploymentsUpdateDefaultApplicationJSON extends SpeakeasyBase {
    message: string;
}
export declare class CodePushDeploymentsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    codePushDeploymentsUpdateDefaultApplicationJSONObject?: CodePushDeploymentsUpdateDefaultApplicationJSON;
}
