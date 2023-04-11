import { SpeakeasyBase } from "../../../internal/utils";
import { UserOutput } from "./user";
/**
 * User
 */
export declare class GetUserResponseOutput extends SpeakeasyBase {
    data: UserOutput;
    /**
     * Operation performed
     */
    operation: string;
    /**
     * Unified API resource name
     */
    resource: string;
    /**
     * Apideck ID of service provider
     */
    service: string;
    /**
     * HTTP Response Status
     */
    status: string;
    /**
     * HTTP Response Status Code
     */
    statusCode: number;
}
