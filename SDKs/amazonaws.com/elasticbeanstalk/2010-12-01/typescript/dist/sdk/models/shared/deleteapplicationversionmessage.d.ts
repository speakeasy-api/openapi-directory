import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to delete an application version.
 */
export declare class DeleteApplicationVersionMessage extends SpeakeasyBase {
    applicationName: string;
    deleteSourceBundle?: boolean;
    versionLabel: string;
}
