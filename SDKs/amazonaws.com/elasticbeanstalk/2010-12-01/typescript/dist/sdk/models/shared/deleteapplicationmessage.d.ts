import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to delete an application.
 */
export declare class DeleteApplicationMessage extends SpeakeasyBase {
    applicationName: string;
    terminateEnvByForce?: boolean;
}
