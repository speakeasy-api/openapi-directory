import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TeamsRemoveProjectLegacyRequest extends SpeakeasyBase {
    projectId: number;
    teamId: number;
}
/**
 * Preview header missing
 */
export declare class TeamsRemoveProjectLegacy415ApplicationJSON extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class TeamsRemoveProjectLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Preview header missing
     */
    teamsRemoveProjectLegacy415ApplicationJSONObject?: TeamsRemoveProjectLegacy415ApplicationJSON;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
